function updateClock() {
    const now = new Date();
    const dayname = now.getDay(),
          month = now.getMonth(),
          date = now.getDate(),
          year = now.getFullYear(),
          hours = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          period = hours >= 12 ? "PM" : "AM";

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const formatTime = time => time < 10 ? "0" + time : time;

    document.querySelector("#dayname").innerHTML = days[dayname];
    document.querySelector("#month").innerHTML = months[month];
    document.querySelector("#daynum").innerHTML = date;
    document.querySelector("#year").innerHTML = year;
    document.querySelector("#hour").innerHTML = formatTime(hours % 12 || 12);
    document.querySelector("#minutes").innerHTML = formatTime(min);
    document.querySelector("#seconds").innerHTML = formatTime(sec);
    document.querySelector("#period").innerHTML = period;
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

initClock();
