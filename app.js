const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

const launchDate = new Date(`July 26 ${currentYear + 1} 00:00:00`);

//Update CountdownTime
function updateCountdownTime(){
    const currentTime = new Date();
    const diff = launchDate - currentTime;
    const d = Math.floor(diff /1000 / 60 / 60 / 24);
    const h = Math.floor(diff /1000 / 60 /60 ) % 24;
    const m = Math.floor(diff /1000 / 60) % 60;
    const s = Math.floor(diff /1000) % 60;

    days.innerHTML = d;
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    hours.innerHTML = h <10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
    
    console.log(diff);
}

setInterval(updateCountdownTime, 1000);
