const rename = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, 'wrongFilename.txt');
const newPath = path.join(__dirname, 'properFilename.md');

// Если исходный файл отсутствует или файл с новым именем уже существует, выбрасываем ошибку
if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
  throw new Error('FS operation failed');
}

// Переименовываем файл
fs.renameSync(oldPath, newPath);

};

await rename();