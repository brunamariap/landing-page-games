let display = document.getElementById("countdown")

let daysDisplay = document.getElementById("days")
let hoursDisplay = document.getElementById("hours")
let minutesDisplay = document.getElementById("minutes")
let secondsDisplay = document.getElementById("seconds")

let countDownDate = new Date("Jun 10, 2025 10:00:00").getTime();

// Atualiza countDown a cada 1 segundo
const time = setInterval(() => {
    let now = new Date().getTime()

    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysDisplay.innerHTML = days
    daysDisplay.style.color = "var(--dark)"
    hoursDisplay.innerHTML = hours
    hoursDisplay.style.color = "var(--dark)"
    minutesDisplay.innerHTML = minutes
    minutesDisplay.style.color = "var(--dark)"
    secondsDisplay.innerHTML = seconds
    secondsDisplay.style.color = "var(--dark)"

    if (distance < 0) {
        clearInterval(time);
        // document.getElementById("hour").innerHTML = "EXPIRED";
        daysDisplay.innerHTML = 0
        hoursDisplay.innerHTML = 0
        minutesDisplay.innerHTML = 0
        secondsDisplay.innerHTML = 0
    }
}, 1000)