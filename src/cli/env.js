const parseEnv = () => {
    // Write your code here 
    // Фильтруем переменные окружения с префиксом MITSO_
const envPrefix = 'MITSO_';

const mitsuEnvVars = Object.entries(process.env)
  .filter(([key]) => key.startsWith(envPrefix))
  .map(([key, value]) => `${key}=${value}`);

// Выводим результат в консоль, объединяя записи через "; "
console.log(mitsuEnvVars.join('; '));

};

parseEnv();