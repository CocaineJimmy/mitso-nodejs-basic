const create = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname, 'files');
const filePath = path.join(fileDir, 'fresh.txt');

// Если файл уже существует, выбрасываем ошибку
if (fs.existsSync(filePath)) {
  throw new Error('FS operation failed');
}

// Создаем файл с заданным содержимым
fs.writeFileSync(filePath, 'I am fresh and young');

};

await create();