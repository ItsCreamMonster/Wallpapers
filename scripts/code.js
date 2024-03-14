const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augusti', 'September', 'October', 'November', 'December'];

function updateTime() {
    const date = new Date();

    let time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        period: 'AM',
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    };

    if (time.hour > 12) {
        time.hour -= 12;
        time.period = 'PM';
    } else if (time.hour == 0) {
        time.hour = 12;
    };

    time.month = months[time.month]

    document.getElementById('hour').innerText = time.hour
    document.getElementById('minute').innerText = time.minute
    document.getElementById('second').innerText = time.second
    document.getElementById('period').innerText = '"' + time.period + '"'
    document.getElementById('day').innerText = time.day
    document.getElementById('month').innerText = '"' + time.month + '"'
    document.getElementById('year').innerText = time.year
}

setInterval(updateTime, 1000)