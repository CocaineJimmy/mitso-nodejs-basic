const read = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileToRead.txt');

// Если файл не существует, выбрасываем ошибку
if (!fs.existsSync(filePath)) {
  throw new Error('FS operation failed');
}

// Читаем содержимое файла и выводим его в консоль
const content = fs.readFileSync(filePath, 'utf8');
console.log(content);

};

await read();