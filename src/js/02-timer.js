import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.getElementById(`datetime-picker`),
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  timeEndEl: document.querySelector('.time-end'),
  timerEl: document.querySelector('.timer'),
  fieldEl: document.querySelector('.field'),
};

let intervalId = null;
let isActive = false;
let futureTimeGlobal = null;
refs.startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setTimer(options.defaultDate, selectedDates[0]);
  },
};

flatpickr(refs.input, options);

function setTimer(currentDate, futureDate) {
  if (futureDate.getTime() <= currentDate.getTime()) {
    Notiflix.Report.warning('Please choose a date in the future');
    return;
  }
  refs.startBtn.removeAttribute('disabled');
  futureTimeGlobal = futureDate;
}

refs.startBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  refs.input.setAttribute('disabled', 'true');
  refs.startBtn.setAttribute('disabled', 'true');
  intervalId = setInterval(() => {
    const deltaTime = futureTimeGlobal.getTime() - Date.now();
    if (deltaTime <= 0) {
      clearInterval(intervalId);
      refs.timeEndEl.textContent = 'Time is over!!! :)';
      refs.input.removeAttribute('disabled');
      refs.startBtn.removeAttribute('disabled');
      return;
    }
    renderTextContent(deltaTime);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function renderTextContent(time) {
  refs.daysEl.textContent = convertMs(time).days;
  refs.hoursEl.textContent = convertMs(time).hours;
  refs.minutesEl.textContent = convertMs(time).minutes;
  refs.secondsEl.textContent = convertMs(time).seconds;
}

refs.timerEl.style.display = 'flex';
refs.timerEl.style.gap = '20px';
