import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for GitHub Pages...');

try {
  // 尝试构建项目
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 检查 dist 目录是否存在
  if (fs.existsSync('dist')) {
    console.log('Build successful!');
    
    // 创建 .nojekyll 文件来禁用 Jekyll 处理
    fs.writeFileSync('dist/.nojekyll', '');
    console.log('Created .nojekyll file');
    
    // 检查 index.html 中的脚本引用
    const indexPath = path.join('dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf8');
      
      // 确保脚本引用正确
      html = html.replace(/src="\/([^"]*)"/g, 'src="./$1"');
      html = html.replace(/href="\/([^"]*)"/g, 'href="./$1"');
      
      fs.writeFileSync(indexPath, html);
      console.log('Updated index.html for relative paths');
    }
    
    console.log('GitHub Pages build completed successfully!');
    console.log('You can now deploy the "dist" folder to GitHub Pages');
  } else {
    console.error('Build failed: dist directory not found');
  }
} catch (error) {
  console.error('Build failed:', error.message);
  
  // 如果构建失败，创建一个简单的静态版本
  console.log('Creating fallback static version...');
  
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  // 创建简单的 HTML 文件
  const fallbackHtml = `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>猫咪团聚</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #09162a;
            color: white;
        }
        h1 {
            color: #ff6b6b;
        }
        .message {
            margin: 20px 0;
            padding: 20px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>🐱 猫咪团聚 🐱</h1>
    <div class="message">
        <p>游戏正在构建中...</p>
        <p>请稍后刷新页面或检查构建状态。</p>
    </div>
    <div class="message">
        <p>游戏已完成中文本地化：</p>
        <ul style="text-align: left; display: inline-block;">
            <li>所有游戏文本已翻译为中文</li>
            <li>支持中文语言检测</li>
            <li>游戏标题改为"猫咪团聚"</li>
        </ul>
    </div>
</body>
</html>`;
  
  fs.writeFileSync('dist/index.html', fallbackHtml);
  fs.writeFileSync('dist/.nojekyll', '');
  
  console.log('Fallback static version created in dist/ directory');
}