//variables
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".min-hand");

//date function
function setDate(){
    const now = new Date()
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 ) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
   
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`


    const hours = now.getMinutes();
    const hourDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);

