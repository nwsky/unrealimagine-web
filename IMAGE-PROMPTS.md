# UnrealImagine — Midjourney 图片提示词文档

> **通用设置（每条提示词末尾都加上）：**
> `--ar [比例] --v 6 --style raw --q 2`
>
> **全站色调关键词（可选加入任何提示）：**
> `deep navy, dark cinematic, purple-blue color grade, film grain, premium streaming aesthetic`

---

## 一、背景底图（横版，叠渐变遮罩用）

> 规格：`--ar 16:9`，导出后作为网页大背景，会被 CSS 渐变半透明遮罩覆盖，所以图本身不用太清晰，虚化/暗调最佳。

---

### BG-01｜首页 Hero 背景
> 📁 保存为：`/public/bg-hero.jpg`

```
cinematic film production studio interior, dark moody atmosphere, film equipment silhouettes, dramatic side lighting, deep navy and purple tones, bokeh blur background, anamorphic lens flare, wide establishing shot, ultra premium aesthetic, no people, abstract depth --ar 16:9 --v 6 --style raw --q 2
```

---

### BG-02｜内页通用背景（About / Capabilities / Contact 共用）
> 📁 保存为：`/public/bg-page.jpg`

```
dark abstract cinematic texture, film grain overlay, deep indigo and near-black tones, subtle light streaks, moody atmospheric depth, minimal composition, premium production studio feel, no text, no people --ar 16:9 --v 6 --style raw --q 2
```

---

### BG-03｜CTA 区块底图（可选）
> 📁 保存为：`/public/bg-cta.jpg`

```
dramatic night cityscape bokeh, dark blue and purple city lights out of focus, cinematic depth of field, wide lens, premium moody atmosphere, ultra shallow focus, no people, abstract urban glow --ar 16:9 --v 6 --style raw --q 2
```

---

## 二、首页 Hero 轮播（竖版）

> 规格：`--ar 9:16`，4张风格统一，代表 UnrealImagine 整体气质。

---

### HERO-01｜电影感场景
> 📁 保存为：`/public/hero-1.jpg`

```
cinematic vertical film still, woman standing in dramatic side lighting, dark luxury interior, deep shadows, purple and teal color grade, emotional tension, premium micro-drama aesthetic, moody portrait, film grain, anamorphic aspect --ar 9:16 --v 6 --style raw --q 2
```

---

### HERO-02｜城市夜景人物
> 📁 保存为：`/public/hero-2.jpg`

```
cinematic vertical shot, person silhouette against city night lights, rain-slicked street reflections, neon purple and blue bokeh, emotional and atmospheric, short drama visual style, premium streaming aesthetic, film grain texture --ar 9:16 --v 6 --style raw --q 2
```

---

### HERO-03｜导演视角 / 幕后
> 📁 保存为：`/public/hero-3.jpg`

```
vertical cinematic behind the scenes, film director silhouette, camera equipment in dark studio, dramatic rim lighting, deep navy tones with purple accent light, premium production feel, moody and intentional --ar 9:16 --v 6 --style raw --q 2
```

---

### HERO-04｜情感特写
> 📁 保存为：`/public/hero-4.jpg`

```
vertical cinematic close-up, woman's face in dramatic window light, emotional and introspective, soft bokeh background, deep shadow, purple-teal color grade, premium short drama aesthetic, intimate and powerful, film grain --ar 9:16 --v 6 --style raw --q 2
```

---

## 三、The Chain of Love（竖版，都市浪漫惊悚）

> 剧情：Alexis 被胁迫监视她强势的老板，陷入权力游戏与危险诱惑。
> 色调：暗调都市、权力感、性感张力、深色奢华室内。

---

### COL-01｜封面主图（卡片 + 详情页）
> 📁 保存为：`/public/cover-chain-of-love.jpg`

```
cinematic vertical film still, powerful businessman and young woman in tense confrontation, dark luxury office interior, dramatic low-key lighting, deep shadows, cold blue and warm amber contrast, seductive power dynamic, premium short drama cover art, no text --ar 9:16 --v 6 --style raw --q 2
```

---

### COL-02｜氛围图 — 权力与张力
> 📁 保存为：`/public/chain-of-love-2.jpg`

```
cinematic vertical still, woman in elegant dark outfit sitting at a glass desk, city lights visible through floor-to-ceiling windows at night, tense and isolated expression, deep blue and purple tones, premium drama aesthetic, film grain --ar 9:16 --v 6 --style raw --q 2
```

---

### COL-03｜氛围图 — 秘密与危险
> 📁 保存为：`/public/chain-of-love-3.jpg`

```
vertical cinematic shot, close-up of a hand placing an envelope on a dark marble table, dramatic spotlight, extreme contrast, secrets and danger mood, black and gold tones, luxury thriller aesthetic, film grain, premium streaming visual --ar 9:16 --v 6 --style raw --q 2
```

---

## 四、Fractured Sunset（竖版，悬疑暗调）

> 剧情：女人倒叙重构姐姐失踪前72小时，记忆碎片化叙事。
> 色调：暖橙落日 vs 冷蓝夜色、记忆感、失真感。

---

### FS-01｜封面主图
> 📁 保存为：`/public/cover-fractured-sunset.jpg`

```
cinematic vertical film still, woman standing at a window at golden hour, fractured reflection in glass, emotional and distressed expression, warm orange sunset behind, cool blue interior contrast, memory and mystery mood, premium thriller drama, film grain --ar 9:16 --v 6 --style raw --q 2
```

---

### FS-02｜氛围图 — 时间碎裂
> 📁 保存为：`/public/fractured-sunset-2.jpg`

```
vertical cinematic abstract still, multiple exposure portrait of a woman's face, fragmented layered image, warm sunset and cold blue overlapping, disorientation and memory loss mood, artistic film grain, premium drama visual --ar 9:16 --v 6 --style raw --q 2
```

---

### FS-03｜氛围图 — 空旷与失踪
> 📁 保存为：`/public/fractured-sunset-3.jpg`

```
vertical cinematic shot, empty hallway in dim apartment building, door left ajar, warm light spilling from inside, eerie and quiet atmosphere, mystery and absence mood, muted amber and shadow tones, film grain, slow-burn thriller aesthetic --ar 9:16 --v 6 --style raw --q 2
```

---

## 五、Second Signal（竖版，科幻冷色）

> 剧情：通讯工程师接收到一个求救信号，意识到是她自己发出的。
> 色调：极简冷色、科技感、孤立感、蓝白光。

---

### SS-01｜封面主图
> 📁 保存为：`/public/cover-second-signal.jpg`

```
cinematic vertical film still, woman alone in a dark communications control room, surrounded by monitors and signal displays, cold blue light, isolated and tense expression, near-future sci-fi aesthetic, premium streaming drama, film grain --ar 9:16 --v 6 --style raw --q 2
```

---

### SS-02｜氛围图 — 信号与孤独
> 📁 保存为：`/public/second-signal-2.jpg`

```
vertical cinematic shot, single monitor screen glowing in complete darkness, mysterious signal waveform displayed, cold cyan and white light, contained and cerebral mood, near-future thriller, premium short film visual --ar 9:16 --v 6 --style raw --q 2
```

---

### SS-03｜氛围图 — 单一空间
> 📁 保存为：`/public/second-signal-3.jpg`

```
vertical cinematic still, minimalist concrete room interior, single fluorescent light casting harsh shadows, lone chair in the center, stark and tense atmosphere, cold grey and blue tones, contained thriller aesthetic, film grain --ar 9:16 --v 6 --style raw --q 2
```

---

## 六、After the Scene（竖版，电影工业感）

> 剧情：一个挣扎中的地区电影节，五个人围绕同一个问题：为什么还在做没人看的东西？
> 色调：幕后感、暖黄灯光、胶片质感、疲惫但真实。

---

### ATS-01｜封面主图
> 📁 保存为：`/public/cover-after-the-scene.jpg`

```
cinematic vertical film still, film director sitting alone in an empty screening room, rows of red seats visible, single projector light beam, warm amber and deep shadow, exhausted and reflective mood, film industry drama, documentary feel, grain texture --ar 9:16 --v 6 --style raw --q 2
```

---

### ATS-02｜氛围图 — 幕后片场
> 📁 保存为：`/public/after-the-scene-2.jpg`

```
vertical cinematic shot, film crew setting up camera on a small indie set, warm practical lights, cables and equipment visible, candid behind-the-scenes mood, muted warm tones, authentic film production aesthetic, grain --ar 9:16 --v 6 --style raw --q 2
```

---

### ATS-03｜氛围图 — 电影节空场
> 📁 保存为：`/public/after-the-scene-3.jpg`

```
vertical cinematic still, festival screening room from back, mostly empty seats, a few audience members silhouetted in dim light, large blank screen glowing, melancholy and honest mood, warm film grain, indie drama aesthetic --ar 9:16 --v 6 --style raw --q 2
```

---

## 汇总清单

| 编号 | 用途 | 比例 | 数量 |
|------|------|------|------|
| BG-01 ~ 03 | 网页背景底图 | 16:9 | 3 张 |
| HERO-01 ~ 04 | 首页轮播 | 9:16 | 4 张 |
| COL-01 ~ 03 | The Chain of Love | 9:16 | 3 张 |
| FS-01 ~ 03 | Fractured Sunset | 9:16 | 3 张 |
| SS-01 ~ 03 | Second Signal | 9:16 | 3 张 |
| ATS-01 ~ 03 | After the Scene | 9:16 | 3 张 |
| **合计** | | | **19 张** |

---

## 使用说明

1. 将提示词复制进 Midjourney，生成后选最佳的 1 张
2. 竖版图（9:16）放入 `/public/` 目录，命名建议如：
   - `cover-chain-of-love.jpg`
   - `cover-fractured-sunset.jpg`
   - 等等
3. 背景底图（16:9）同样放入 `/public/`，命名如：
   - `bg-hero.jpg`
   - `bg-page.jpg`
4. 替换 `data.ts` 里对应的 Unsplash 链接为本地路径（如 `/cover-chain-of-love.jpg`）
5. 背景底图告诉我放哪里，我来写 CSS

---

> 生成后有不满意的，描述给我，我帮你调整提示词。
