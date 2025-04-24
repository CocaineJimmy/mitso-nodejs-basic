const performCalculations = async () => {
    // Write your code here
    // main.js
const { Worker } = require('worker_threads');
const os = require('os');
const path = require('path');

const numCores = os.cpus().length;
const workerFile = path.join(__dirname, 'worker.js');

const workerPromises = [];

// Для каждого ядра создаём воркер и отправляем число: 10, 11, 12, ...
for (let i = 0; i < numCores; i++) {
  workerPromises.push(new Promise((resolve) => {
    const worker = new Worker(workerFile);
    const numberToSend = 10 + i;

    // Если воркер успешно вернул результат:
    worker.once('message', (result) => {
      resolve({ status: 'resolved', data: result });
    });

    // Если возникнет ошибка в worker-е:
    worker.once('error', () => {
      resolve({ status: 'error', data: null });
    });

    // Также, если worker завершился с ненулевым кодом, а событие 'message' не было вызвано:
    worker.once('exit', (code) => {
      if (code !== 0) {
        resolve({ status: 'error', data: null });
      }
    });
    
    // Передаём данные в воркер
    worker.postMessage(numberToSend);
  }));
}

// После завершения работы всех воркеров выводим массив результатов
Promise.all(workerPromises)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error('Error collecting worker results:', err);
  });

};

await performCalculations();