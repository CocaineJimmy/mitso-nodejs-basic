const read = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fileToRead.txt');

// Проверяем существование файла
if (!fs.existsSync(filePath)) {
  console.error('FS operation failed');
  process.exit(1);
}

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// Обработка ошибок при чтении потока
readStream.on('error', (err) => {
  console.error('FS operation failed');
});

// Передаем данные напрямую в process.stdout
readStream.pipe(process.stdout);

};

await read();