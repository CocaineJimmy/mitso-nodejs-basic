const compress = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const sourcePath = path.join(__dirname, 'fileToCompress.txt');
const outputPath = path.join(__dirname, 'archive.gz');

// Если исходного файла для сжатия не существует, выбрасываем ошибку
if (!fs.existsSync(sourcePath)) {
  throw new Error('FS operation failed');
}

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(outputPath);
const gzip = zlib.createGzip();

// Обработка ошибок на каждом потоке
readStream.on('error', () => {
  throw new Error('FS operation failed');
});
writeStream.on('error', () => {
  throw new Error('FS operation failed');
});
gzip.on('error', () => {
  throw new Error('FS operation failed');
});

// Создаем цепочку потоков: Readable -> Gzip -> Writable
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('File compressed successfully');
  });

};

await compress();