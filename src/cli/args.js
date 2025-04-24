const parseArgs = () => {
    // Write your code here 
    // Получаем аргументы командной строки, начиная с 3-го элемента (индексы 0 и 1 — node и путь к скрипту)
const args = process.argv.slice(2);
const output = [];

// Предполагается, что аргументы передаются парами: --ключ значение
for (let i = 0; i < args.length; i += 2) {
  // Удаляем ведущие двойные дефисы из имени свойства
  const key = args[i].replace(/^--/, '');
  const value = args[i + 1];
  output.push(`${key} is ${value}`);
}

// Выводим форматированную строку, где пары разделены запятой и пробелом
console.log(output.join(', '));

};

parseArgs();