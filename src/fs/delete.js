const remove = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileToRemove.txt');

// Если файл не существует, выбрасываем ошибку
if (!fs.existsSync(filePath)) {
  throw new Error('FS operation failed');
}

// Удаляем файл
fs.unlinkSync(filePath);

};

await remove();