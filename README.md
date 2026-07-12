# 黄晓璐 · 日常片段

一个无需构建工具的静态影像网页，使用原生 HTML、CSS 和 JavaScript，可直接部署到 GitHub Pages。

## 本地预览

在项目目录运行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:4173/`。

## 部署到 GitHub Pages

1. 将项目推送到 GitHub 仓库。
2. 打开仓库的 `Settings` → `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择当前分支和 `/ (root)` 目录后保存。

页面全部使用相对路径，既支持用户主页仓库，也支持项目子路径。

## 隐私说明

公开目录仅包含物理裁切后的单人照片；原始多人照片和视频没有放进项目，也不会随 GitHub Pages 发布。
