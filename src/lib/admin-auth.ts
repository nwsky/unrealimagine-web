// 修复 #3：移除硬编码默认密码，未设置环境变量时启动警告
if (!process.env.ADMIN_PASSWORD && !process.env.ADMIN_BEARER_TOKEN) {
  console.warn(
    "[admin-auth] WARNING: ADMIN_PASSWORD is not set. " +
    "Set it in your environment before deploying to production."
  );
}

export function getAdminPassword() {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) {
    throw new Error("ADMIN_PASSWORD environment variable is not set.");
  }
  return pwd;
}

export function getAdminBearerToken() {
  return process.env.ADMIN_BEARER_TOKEN ?? getAdminPassword();
}

export function isValidAdminBearerToken(authHeader: string | null) {
  if (!authHeader?.startsWith("Bearer ")) {
    return false;
  }

  try {
    const token = authHeader.slice("Bearer ".length).trim();
    return token.length > 0 && token === getAdminBearerToken();
  } catch {
    return false;
  }
}
