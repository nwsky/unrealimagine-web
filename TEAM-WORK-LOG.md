# UnrealImagine Portal — Team Work Log

**Project:** UnrealImagine.com 门户网站  
**Stack:** Next.js 16 / TypeScript / CSS  
**Status:** MVP 完成，所有页面视觉升级完成，build 通过

---

## 团队成员工作内容

---

### Nova — Lead Website Architect / Project Lead

**职责：定盘、结构主导、项目方向**

具体工作内容：

- 判断这个网站的正确定位：不是普通企业官网，而是 **premium entertainment / production studio portal**
- 明确网站三大核心目标：
  - 品牌展示
  - 作品展示
  - 商务合作转化
- 规划整站页面结构：
  - Home
  - About
  - Works
  - Capabilities
  - Contact
- 确定首页叙事主线顺序：
  - 先说清楚是谁
  - 再展示做什么
  - 再证明能力
  - 最后引导合作
- 定义各页面职责，确保每个页面承担清楚的单一目标
- 划定项目边界，防止范围扩散

---

### Mira — UX Strategist

**职责：用户体验、页面路径、可用性**

具体工作内容：

- 设计首页信息顺序，确保访问者第一眼就能理解品牌
- 提出导航逻辑建议：
  - 导航要简洁：Home / About / Works / Capabilities / Contact
  - 右上角 CTA 固定展示：Partner With Us
- 识别并解决导航和返回路径缺失问题（所有独立页面补全）
- 设计页面阅读节奏：从 Hero → 作品 → 能力 → 合作入口
- 提出 CTA 策略：不过多，主次分明，联系入口不埋太深
- 确保作品入口足够早出现，符合影视公司访问者预期
- 审查 Contact 页用户路径，建议改成左右分栏，降低联系门槛

---

### Lyra — Visual Designer

**职责：视觉语言、界面一致性、品牌气质**

具体工作内容：

- 定义整站视觉方向：
  - cinematic（电影感）
  - premium（高级）
  - modern（现代）
  - controlled（克制不浮夸）
- 建立色彩系统：
  - 主背景：`#05070d` 深黑
  - 辅助色：紫 `#8c7bff` + 蓝 `#32b8ff`
  - 文字：`#edf2ff` 主色 / `#b8c2d8` 辅助色
  - 点缀：渐变光感叠加，不做廉价霓虹效果
- 设计首页 Hero 视觉层：
  - 双重背景光晕（紫 + 蓝）营造空间感
  - 右侧 poster-stack 模拟电影海报叠层效果
- 设计作品卡片视觉区块（card-image）：
  - 每个项目用不同色调光影区分，增强辨识度
- 强化全站卡片质感：渐变底色 + 轻边框 + 阴影
- 统一 About / Capabilities / Contact 页面视觉等级
- Capabilities 页引入大数字编号（01–05），增加视觉层次
- Contact 页设计两列布局，左侧信息卡 + 右侧表单

---

### Sera — Copy & Content Designer

**职责：文案、信息表达、品牌语气**

具体工作内容：

- 确定品牌语气规范：
  - Confident（有主见）
  - Clear（清楚不绕弯）
  - Controlled（克制不夸张）
  - Professional（专业有信任感）
  - Imaginative（有想象力，但不浮夸）
- 撰写首页 Hero 文案：
  - Headline：**Short-Form Stories. Cinematic Impact.**
  - Subheadline：完整品牌描述段落
- 撰写各页面核心文案：
  - Home：所有模块（Hero / About / Works / Why / Capabilities / CTA）
  - About：What We Believe / How We Work / Positioning
  - Works：页面 intro 及每个项目描述（短版 + 长版）
  - Capabilities：能力描述（5 条，每条标题 + 说明）
  - Contact：品牌介绍段落 + 联系页引导语
- 撰写 Work Detail 页文案：
  - 每个项目的 longDescription
  - Positioning / Status 区块说明
- 写清楚 Contact 页联系信息展示：Email / Location / Focus

---

### Orion — Frontend Website Developer

**职责：前端实现、页面构建、技术落地**

具体工作内容：

- 搭建 Next.js 16 项目骨架（App Router / TypeScript / CSS）
- 实现多页面路由结构：
  - `/`
  - `/about`
  - `/works`
  - `/works/[slug]`（动态详情页）
  - `/capabilities`
  - `/contact`
- 建立数据层：`src/app/data.ts`，统一管理所有项目和能力数据
- 实现 `generateStaticParams`，把三个项目详情页预渲染为静态 HTML
- 封装共享组件 `src/app/components.tsx`：
  - `SiteHeader`（全站统一导航）
  - `SiteFooter`（全站统一底部）
  - `PageShell`（包裹所有页面的 layout shell）
- 实现所有页面布局：响应式 Grid + 克制 flex
- 实现视觉层的所有 CSS：
  - 渐变背景
  - 光晕叠加
  - 卡片系统
  - 字体层级
  - 按钮系统
  - 响应式断点
- 实现 Contact 页表单 UI（前端结构完整，待接后端）
- 多次执行 `npm run build` 验证构建无报错
- 修复独立页面缺少导航 / 返回路径的问题

---

## 项目最终文件结构

```
unrealimagine-portal/
├── src/
│   └── app/
│       ├── page.tsx              # 首页
│       ├── layout.tsx            # 根 layout（metadata）
│       ├── globals.css           # 全站样式
│       ├── components.tsx        # 共享组件（Header / Footer / Shell）
│       ├── data.ts               # 内容数据（项目 + 能力）
│       ├── about/
│       │   └── page.tsx
│       ├── works/
│       │   ├── page.tsx
│       │   └── [slug]/
│       │       └── page.tsx
│       ├── capabilities/
│       │   └── page.tsx
│       └── contact/
│           └── page.tsx
├── README.md
├── TEAM-WORK-LOG.md              # 本文档
├── package.json
└── tsconfig.json
```

---

## Build 状态

```
✓ Compiled successfully
✓ TypeScript passed
✓ 11 pages generated (static + SSG)
```

所有页面：
- `/` ✅
- `/about` ✅
- `/capabilities` ✅
- `/contact` ✅
- `/works` ✅
- `/works/fractured-sunset` ✅
- `/works/second-signal` ✅
- `/works/after-the-scene` ✅

---

## 如何运行

```bash
cd /Users/york/.openclaw/workspace/unrealimagine-portal
npm run dev
```

打开 `http://localhost:3000`
