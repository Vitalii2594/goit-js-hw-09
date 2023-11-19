function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримуємо посилання на кнопки та body
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const body = document.body;

let intervalId;

// Функція для зміни кольору та активації/деактивації кнопок
function startColorSwitch() {
  // Активуємо Stop та деактивуємо Start
  startButton.disabled = true;
  stopButton.disabled = false;

  // Запускаємо зміну кольору кожну секунду
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

// Функція для зупинки зміни кольору та активації/деактивації кнопок
function stopColorSwitch() {
  // Деактивуємо Stop та активуємо Start
  startButton.disabled = false;
  stopButton.disabled = true;

  // Зупиняємо зміну кольору
  clearInterval(intervalId);
}

// Додаємо обробник подій на кнопки
startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);
