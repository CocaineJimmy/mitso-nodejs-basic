const copy = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files_copy');

// Если исходная папка не существует ИЛИ целевая папка уже существует, выбрасываем ошибку
if (!fs.existsSync(srcDir) || fs.existsSync(destDir)) {
  throw new Error('FS operation failed');
}

// Создаем целевую папку
fs.mkdirSync(destDir);

// Читаем список файлов из исходной папки и копируем каждый файл
const files = fs.readdirSync(srcDir);
files.forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
});

};

await copy();
