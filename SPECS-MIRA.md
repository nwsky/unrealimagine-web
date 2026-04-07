# Mira — UX Specs

## Contact 表单字段（确认版）

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| Name | text | ✅ | 个人或联系人姓名 |
| Company | text | ❌ | 公司或工作室名称 |
| Email | email | ✅ | 回复地址 |
| Inquiry Type | select | ✅ | Partnership / Project / Branded Storytelling / Other |
| Project Summary | textarea | ✅ | 5 行，描述项目或合作意向 |

**表单提交行为：**
- 提交后显示成功状态（不跳转）
- 错误时显示行内提示，不用 alert
- 必填项未填时不允许提交，高亮对应字段

---

## 移动端导航交互规范

- 断点：< 768px 切换为移动端导航
- 触发：右上角汉堡图标（三横线），点击展开全屏遮罩菜单
- 展开状态：显示全部导航项 + 关闭按钮（×）
- 菜单项点击后：自动关闭菜单
- 背景：深色遮罩，和整站风格一致
- 动效：从上滑入（translateY），200ms ease

**导航项顺序：**
1. Home
2. About
3. Works
4. Capabilities
5. Contact
6. Partner With Us（CTA，高亮显示）
