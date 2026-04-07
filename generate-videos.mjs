import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const API_KEY = "sk-cp-ftCr8LZaAIniaBrFK4o4cjYkiZ2ZlEssih5G8y_IYyZdE5AH3L9S-egY7IK1Whme0SKaCS1Z8SSnRZfxV_2xfdshY5zZT3wXlheXB8IaxrYCq3yO5vv4v7o";
const BASE_URL = "https://api.minimaxi.com/v1";
const OUT_DIR = "./public";

// 2 × MiniMax-Hailuo-2.3 + 2 × MiniMax-Hailuo-2.3-Fast = 4个配额
const VIDEOS = [
  {
    filename: "chain-of-love-video.mp4",
    model: "MiniMax-Hailuo-2.3",
    cover: "./public/cover-chain-of-love.jpg",
    prompt: "A woman in a black dress slowly turns her head toward camera near a dark window, candlelight flickering in foreground, deep teal and amber color grade, ultra slow motion, cinematic, emotional, no dialogue, no text.",
  },
  {
    filename: "fractured-sunset-video.mp4",
    model: "MiniMax-Hailuo-2.3",
    cover: "./public/cover-fractured-sunset.jpg",
    prompt: "A woman walks slowly down a dark empty hallway, her reflection visible in a cracked mirror on the wall, desaturated warm tones, slow motion, psychological thriller mood, no dialogue, no text.",
  },
  {
    filename: "second-signal-video.mp4",
    model: "MiniMax-Hailuo-2.3-Fast",
    cover: "./public/cover-second-signal.jpg",
    prompt: "Close-up of a glowing communication console screen in a dark room, a distress signal waveform pulses twice then flatlines, cold blue-white light, near-future aesthetic, slow push-in, no people, no dialogue, no text.",
  },
  {
    filename: "after-the-scene-video.mp4",
    model: "MiniMax-Hailuo-2.3-Fast",
    cover: "./public/cover-after-the-scene.jpg",
    prompt: "Empty red velvet cinema seats facing a blank white screen, a projector beam cuts through dust in the air, warm tungsten light, melancholic and quiet, very slow zoom out, no people, no dialogue, no text.",
  },
];

async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  return res.json();
}

async function submitVideo(video) {
  console.log(`\n▶ Submitting: ${video.filename} (${video.model})`);
  const imgB64 = fs.readFileSync(video.cover).toString("base64");
  const body = {
    model: video.model,
    prompt: video.prompt,
    first_frame_image: `data:image/jpeg;base64,${imgB64}`,
    duration: 6,
    resolution: "768P",
    prompt_optimizer: true,
  };
  const res = await apiFetch("/video_generation", {
    method: "POST",
    body: JSON.stringify(body),
  });
  console.log("  Response:", JSON.stringify(res));
  return res.task_id || null;
}

async function pollStatus(taskId) {
  console.log(`  ⏳ Polling task ${taskId}...`);
  for (let i = 0; i < 120; i++) {
    await new Promise(r => setTimeout(r, 10000));
    const res = await apiFetch(`/query/video_generation?task_id=${taskId}`);
    const status = res.status;
    console.log(`  [${i+1}] status: ${status}`);
    if (status === "Success") return res.file_id;
    if (status === "Fail") { console.log("  ❌ Failed:", JSON.stringify(res)); return null; }
  }
  return null;
}

async function getDownloadUrl(fileId) {
  const res = await apiFetch(`/files/retrieve?file_id=${fileId}`);
  console.log("  File info:", JSON.stringify(res));
  return res.file?.download_url || res.download_url || null;
}

async function downloadFile(url, filename) {
  const dest = path.join(OUT_DIR, filename);
  console.log(`  ⬇ Downloading → ${dest}`);
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return downloadFile(res.headers.location, filename).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function main() {
  console.log("🎬 UnrealImagine Video Generator\n");
  for (const video of VIDEOS) {
    try {
      const taskId = await submitVideo(video);
      if (!taskId) { console.log("  ❌ No task ID"); continue; }
      const fileId = await pollStatus(taskId);
      if (!fileId) continue;
      const downloadUrl = await getDownloadUrl(fileId);
      if (!downloadUrl) { console.log("  ❌ No download URL"); continue; }
      await downloadFile(downloadUrl, video.filename);
      console.log(`  ✅ Saved: ${video.filename}`);
    } catch (err) {
      console.error(`  ❌ Error: ${err.message}`);
    }
  }
  console.log("\n✅ All done!");
}

main();
