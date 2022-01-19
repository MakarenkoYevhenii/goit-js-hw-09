import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const buttonToStartTimer = document.querySelector('[data-start]');
const thirdOfSeptemberCalendarEl = document.querySelector('#datetime-picker');
const buttonIsOff = (buttonToStartTimer.disabled = true);
let pickedTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      alert('Please choose a date in the future');
      return;
    }
    console.log(selectedDates[0] - Date.now());
    buttonToStartTimer.disabled = false;
    pickedTime = selectedDates[0];
  },
};
flatpickr(thirdOfSeptemberCalendarEl, options);

buttonToStartTimer.addEventListener('click', () => {
  const timerId = setInterval(() => {
    // console.log(pickedTime-Date.now());
    const diff = pickedTime - Date.now();
    if (diff <= 0){
      clearInterval(timerId);
      return alert('все закончилось');
    }
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    const daysEl = (document.querySelector('[data-days]').textContent = days
      .toString()
      .padStart(2, 0));
    const hoursEl = (document.querySelector('[data-hours]').textContent = hours
      .toString()
      .padStart(2, 0));
    const minutesEl = (document.querySelector('[data-minutes]').textContent = minutes
      .toString()
      .padStart(2, 0));
    const secondsEl = (document.querySelector('[data-seconds]').textContent = seconds
      .toString()
      .padStart(2, 0));
    
  }, 1000);
});

