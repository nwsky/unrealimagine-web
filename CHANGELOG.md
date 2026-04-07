# UnrealImagine Portal — 变更日志

## 2026-04-03 — 改进计划启动

### 项目审计
- 技术栈：Next.js 16.2.1 + React 19 + TypeScript + 纯 CSS
- 已有 6 个页面：`/` `/about` `/works` `/works/[slug]` `/capabilities` `/contact`
- 已有 API：`/api/contact`、`/api/admin/media`、`/api/admin/upload`
- 已有后台：`/admin`（媒体管理）、`/monitor`（Agent 监控）
- 已有 404 页面

### 改进任务（14 项）

#### P0 — 安全 & 稳定性
- [ ] Admin API 加认证（Rowan 进行中）
- [ ] 媒体持久化（内存 → 文件系统）
- [ ] 联系表单接真实邮件服务（Resend）

#### P1 — 视觉体验
- [ ] framer-motion 动效（进场+滚动+悬浮）
- [ ] 自定义视频播放器 UI
- [ ] 页面切换 loading transition

#### P2 — 性能 & SEO
- [ ] next/image 优化 + WebP
- [ ] next-sitemap 自动生成
- [ ] PWA 支持

#### P3 — 架构清理
- [ ] 组件目录重构（app/ → components/）
- [ ] CSS 模块化（拆分 globals.css）
- [ ] 删除废弃文件（layout-components.tsx, server-components.tsx）

#### P4 — 新功能
- [ ] Works 筛选（类型/状态/调性）
- [ ] News 页面（项目动态）

### 内容更新（Nova 确认）
- [ ] News 页 IA 定义（方案 A：项目动态页）
- [ ] Stats 数字更新（3+ → 真实数字）
- [ ] Works 数据扩容（+The Chain of Love, +Love At Midlife）

### 甲方信息
- 公司：Unreal Imagine Inc.
- 地址：Culver City, CA
- 规模：11-50 人
- 联系：info@unrealimagine.com
- Instagram：@unrealimagine_
- 已上线作品：The Chain of Love（Vigloo 平台）
- 已完成拍摄：Love At Midlife

### 任务分配
- Rowan：14 项技术改进（P0-P4）
- Nova：IA 定义 + 内容确认
- Sera：文案更新（待派）
