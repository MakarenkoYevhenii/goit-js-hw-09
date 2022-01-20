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
    res(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    rej(`❌ Rejected promise ${position} in ${delay}ms`);
  }},delay)
  })
  promise.then(value =>{
    console.log(value);
  })
}
function promiseClick(event){
  let delay=Number(userDelayEl.value)
  let step=Number(userStepEl.value)
  let NumberOfRecursions=Number(userAmountEl.value)
  // console.log(NumberOfRecursions);
  event.preventDefault()
  for (let i = 0; i < NumberOfRecursions; i++) {
    delay=delay+step
    console.log(delay);
    createPromise(i,delay)
    // console.log(delay);
   }
}