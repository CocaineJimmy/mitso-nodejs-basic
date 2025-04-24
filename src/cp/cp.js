const { spawn } = require('child_process');
const path = require('path');

const spawnChildProcess = async (args) => {
  // Определяем путь к файлу script.js, который должен быть запущен как дочерний процесс
  const scriptPath = path.join(__dirname, 'script.js');

  // Создаем дочерний процесс: запускаем 'node' с аргументами: путь к script.js и переданные args
  const child = spawn('node', [scriptPath, ...args], {
    // Указываем, что для stdin и stdout будет создан собственный канал (pipe)
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  // Перенаправляем ввод родительского процесса в stdin дочернего процесса
  process.stdin.pipe(child.stdin);
  // Перенаправляем stdout дочернего процесса в stdout родительского процесса
  child.stdout.pipe(process.stdout);

  // Обработка ошибок дочернего процесса — если возникнет ошибка, выводим ее в консоль
  child.on('error', (err) => {
    console.error('Child process encountered an error:', err);
  });

  // При завершении работы дочернего процесса выводим его код завершения
  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['argument1', 'argument2']); 
