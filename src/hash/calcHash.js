const calculateHash = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const filePath = path.join(__dirname, 'fileToCalculateHashFor.txt');

// Если файла не существует, генерируем ошибку
if (!fs.existsSync(filePath)) {
  throw new Error('FS operation failed');
}

// Считываем данные файла
const fileBuffer = fs.readFileSync(filePath);

// Вычисляем SHA256 хэш
const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// Выводим хэш в консоль как hex строку
console.log(hash);

};

await calculateHash();