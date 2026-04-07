# Lyra — Visual Specs

## 移动端导航样式规范

```css
/* 汉堡按钮 */
- 尺寸：40×40px，透明背景
- 图标：三横线，间距 6px，颜色 #edf2ff
- hover：opacity 0.7

/* 全屏遮罩菜单 */
- 背景：#05070d，opacity 0.97，backdrop-filter: blur(12px)
- 进入动效：translateY(-100%) → translateY(0)，200ms ease
- z-index：100

/* 菜单项 */
- 字体：1.6rem，font-weight 600，颜色 #edf2ff
- 间距：32px 上下
- hover：color #8c7bff，transition 150ms
- 边距：水平居中，左对齐

/* CTA 项（Partner With Us）*/
- 颜色：#8c7bff
- 下方加 1px 线条，颜色 #8c7bff44
```

---

## 404 视觉方向

- 背景：和整站一致，#05070d + 紫色光晕（左上角）
- 中央显示：大字 "404"，字号 9rem，font-weight 800，颜色 rgba(140,123,255,0.15)
- 叠加正文内容居中，z-index 高于数字
- 整体风格：cinematic，克制，不用卡通插图
