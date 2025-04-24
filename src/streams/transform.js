const transform = async () => {
    // Write your code here 
    const { Transform } = require('stream');

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Переворачиваем текст: преобразуем чанк в строку, разбиваем на символы, переворачиваем массив и объединяем обратно
    const reversed = chunk.toString().split('').reverse().join('');
    callback(null, reversed);
  }
});

// Обработка ошибок у transform-потока
reverseTransform.on('error', (err) => {
  console.error('Stream operation failed');
  process.exit(1);
});

// Соединяем потоки: ввод -> преобразование -> вывод
process.stdin.pipe(reverseTransform).pipe(process.stdout);

};

await transform();