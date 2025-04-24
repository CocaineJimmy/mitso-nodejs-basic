const { parentPort } = require('worker_threads');

// Функция вычисления n‑го числа Фибоначчи рекурсивно
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// Функция, которая вычисляет результат и отправляет его в основной поток
const sendResult = (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

// Ожидаем сообщение из основного потока
parentPort.on('message', (data) => {
  // Предполагаем, что получаем число; если тип неверный, выбрасываем ошибку
  if (typeof data !== 'number') {
    throw new Error('Invalid input: expected a number');
  }
  sendResult(data);
});
