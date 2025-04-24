const decompress = async () => {
    // Write your code here 
    const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const sourcePath = path.join(__dirname, 'archive.gz');
const outputPath = path.join(__dirname, 'fileToCompress.txt');

// Если архив для распаковки не существует, выбрасываем ошибку
if (!fs.existsSync(sourcePath)) {
  throw new Error('FS operation failed');
}

const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(outputPath);
const gunzip = zlib.createGunzip();

// Обработка ошибок в каждом потоке
readStream.on('error', () => {
  throw new Error('FS operation failed');
});
writeStream.on('error', () => {
  throw new Error('FS operation failed');
});
gunzip.on('error', () => {
  throw new Error('FS operation failed');
});

// Создаем цепочку потоков: Readable -> Gunzip -> Writable
readStream
  .pipe(gunzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('File decompressed successfully');
  });

};

await decompress();