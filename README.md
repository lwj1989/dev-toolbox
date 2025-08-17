# Dev Toolbox

<div align="center">

![Dev Toolbox Logo](public/favicon.ico)

**一个集成常用开发者工具的现代化桌面应用**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/Electron-31+-blue.svg)](https://electronjs.org/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-green.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)

[English](README_EN.md) | 简体中文

</div>

## 🚀 功能特性

### 核心工具

- 📝 **文本对比工具** - 基于 Monaco Editor，支持分屏/内联对比，高亮差异，语法高亮，差异导航
- 🔤 **Base64 编解码** - 支持标准和URL安全模式，文件处理，实时转换
- 📄 **JSON 工具** - 格式化、压缩、验证，支持JSON↔YAML↔XML转换，JSONPath查询，树状视图
- 🔗 **URL 编解码** - 支持多种编码模式，实时处理
- ⏰ **智能时间戳转换** - 智能识别多种时间格式，输出标准格式
- 🔑 **UUID 生成器** - 生成标准UUID v4
- 📊 **文本分析** - 实时统计字符数、行数、段落数等
- 🔒 **哈希生成器** - 支持MD5、SHA系列算法
- 🗃️ **SQL 格式化** - 多数据库支持的SQL美化工具
- 🔐 **密码生成器** - 多种密码类型，安全强度分析

### 产品特色

✨ **现代化界面** - 基于 Monaco Editor，提供专业的代码编辑体验
🎨 **统一设计** - 一致的UI/UX设计，流畅的交互体验
🌙 **深色模式** - 自适应系统主题，护眼舒适
⚡ **高性能** - 实时处理，响应迅速
💾 **数据持久化** - 自动保存用户设置和历史记录
🖥️ **跨平台** - 支持 macOS、Windows、Linux

## 📸 预览

![Dev Toolbox 主界面](https://via.placeholder.com/800x500?text=Dev+Toolbox+Screenshot)

> 注：请添加实际的应用截图

## 🛠️ 技术栈

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite 5
- **桌面框架**: Electron 31
- **UI框架**: TailwindCSS 3
- **编辑器**: Monaco Editor (VS Code 核心)
- **状态管理**: Pinia
- **工具库**: dayjs、crypto-js、js-yaml、xml-js 等

## 📦 安装使用

### 预编译版本 (推荐)

前往 [Releases](../../releases) 页面下载适合您平台的安装包：

- **macOS**: `Dev-Toolbox-x.x.x.dmg` (支持 Intel 和 Apple Silicon)
- **Windows**: `Dev-Toolbox-Setup-x.x.x.exe`
- **Linux**: `Dev-Toolbox-x.x.x.AppImage`

### 从源码构建

#### 环境要求

- Node.js 18+
- npm 9+

#### 克隆仓库

```bash
git clone https://github.com/your-username/dev-toolbox.git
cd dev-toolbox
```

#### 安装依赖

```bash
npm install
```

#### 开发模式

```bash
# Web 开发模式
npm run dev

# Electron 开发模式
npm run electron:dev
```

#### 构建应用

```bash
# 构建所有平台
npm run build

# 分平台构建
npm run build:mac     # macOS
npm run build:win     # Windows
npm run build:linux   # Linux
```

#### Web 版本部署

```bash
# 构建 Web 版本
npm run build:web

# 预览构建结果
npm run preview
```

## 🎯 使用指南

### 启动应用

1. 下载并安装对应平台的安装包
2. 启动 Dev Toolbox
3. 在主界面选择需要使用的工具
4. 享受高效的开发体验

### 快捷操作

- `Cmd/Ctrl + V`: 粘贴文本
- `Cmd/Ctrl + C`: 复制结果
- `Cmd/Ctrl + A`: 全选
- `Cmd/Ctrl + Z`: 撤销
- `Cmd/Ctrl + Shift + Z`: 重做

### 工具说明

每个工具页面都提供了详细的使用说明和示例，点击 "?" 图标查看帮助信息。

## 🌐 在线体验

您也可以通过浏览器直接体验 Dev Toolbox：

- **官方在线版**: [https://dev-toolbox.vercel.app](https://dev-toolbox.vercel.app)

> 在线版本包含完整功能，但文件操作可能受到浏览器限制

## 🤝 贡献指南

我们欢迎任何形式的贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解详细信息。

### 快速开始贡献

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 报告问题

如果您发现了 Bug 或有功能建议，请：

1. 查看 [已有 Issues](../../issues) 确认问题未被报告
2. 使用合适的 [Issue 模板](../../issues/new/choose) 创建新问题
3. 提供详细的重现步骤和环境信息

## 📝 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解版本更新详情。

### 最新版本亮点

- ✨ 全新的 Monaco Editor 集成
- 🎨 统一的 UI/UX 设计
- 🚀 性能优化和稳定性提升
- 🛠️ 新增多个实用工具

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 致谢

感谢以下开源项目的支持：

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Electron](https://electronjs.org/) - 跨平台桌面应用框架
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - 强大的代码编辑器
- [TailwindCSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Vite](https://vitejs.dev/) - 快速的构建工具

## 📞 支持

如果您喜欢这个项目，请考虑：

- ⭐ 给项目点个星标
- 🐛 报告问题和建议
- 🔧 贡献代码
- 📢 推荐给其他开发者

---

<div align="center">

**让开发更高效，让工具更好用**

</div>