const list = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

// Если папка не существует, выбрасываем ошибку
if (!fs.existsSync(dirPath)) {
  throw new Error('FS operation failed');
}

// Читаем список файлов и выводим результат в консоль
const files = fs.readdirSync(dirPath);
console.log(files);

};

await list();