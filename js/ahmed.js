const weddingTime = new Date("2022-10-20T21:00:00+02:00").getTime();
setInterval(() => {
    const currentTime = Date.now();
    const diffInMS = weddingTime - currentTime;
    document.getElementById("daysLeft").innerHTML = msToDays(diffInMS);
    document.getElementById("hoursLeft").innerHTML = msToHours(diffInMS);
    document.getElementById("minutesLeft").innerHTML =
        msToMinutes(diffInMS);
    document.getElementById("secondsLeft").innerHTML =
        msToSeconds(diffInMS);
}, 1000);

function msToDays(ms) {
    return Math.trunc(ms / 1000 / 60 / 60 / 24);
}

function msToHours(ms) {
    return Math.trunc(ms / 1000 / 60 / 60);
}

function msToMinutes(ms) {
    return Math.trunc(ms / 1000 / 60);
}

function msToSeconds(ms) {
    return Math.trunc(ms / 1000);
}