import Notiflix from 'notiflix';

const userDelayEl = document.querySelector('input[name="delay"]');
const userStepEl = document.querySelector('input[name="step"]');
const userAmountEl = document.querySelector('input[name="amount"]');
const btnCreatePromisesEl = document.querySelector('.submit-js');
const form = document.querySelector('.form');


form.addEventListener('click', promiseClick);

function createPromise(position, delay) {
  const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    res ({position,delay})
  } else {
    rej ({position,delay})
  }},delay)
  })
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
function promiseClick(event){
  let delay=Number(userDelayEl.value)
  let step=Number(userStepEl.value)
  let NumberOfRecursions=Number(userAmountEl.value)
  // console.log(NumberOfRecursions);
  event.preventDefault()
  for (let i = 0; i < NumberOfRecursions; i++) {
    createPromise(i+1,delay)
    delay=delay+step
    console.log(delay);
    // console.log(delay);
   }
}