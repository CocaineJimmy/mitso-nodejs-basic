const write = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileToWrite.txt');
const writeStream = fs.createWriteStream(filePath);

// Обработка ошибок при записи
writeStream.on('error', (err) => {
  console.error('FS operation failed');
  process.exit(1);
});

// Передаем данные из process.stdin в поток записи
process.stdin.pipe(writeStream);

};

await write();