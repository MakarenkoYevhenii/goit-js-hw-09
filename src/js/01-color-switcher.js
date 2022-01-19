const buttonStartEl=document.querySelector("[data-start]")
const buttonEndEl=document.querySelector("[data-stop]")
let timerId=null
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  

buttonStartEl.addEventListener("click" ,() => {
    timerId = setInterval(() => {

        document.body.style.backgroundColor=getRandomHexColor();
        console.log(document.body.style.backgroundColor);
        buttonStartEl.disabled=true
        buttonEndEl.disabled=false


      }, 1000);
    });
    

buttonEndEl.addEventListener("click" ,() => {
if(timerId===null)
{
  buttonEndEl.disabled=true
  return alert("Нажми старт сначала");

}
buttonEndEl.disabled=true

  buttonStartEl.disabled=false
  clearInterval(timerId);
  alert(`на данный момент здесь отображен такой цвет:${document.body.style.backgroundColor}`)
    });
    
    

