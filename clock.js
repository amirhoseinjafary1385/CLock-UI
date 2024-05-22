const degree = 6; // Each second/minute/hour corresponds to 6 degrees of rotation

const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    const date = new Date();

    // Calculate rotation angles
    const hh = date.getHours() * 30; // 30 degrees per hour
    const mm = date.getMinutes() * degree; // 6 degrees per minute
    const ss = date.getSeconds() * degree; // 6 degrees per second

    // Update transform properties for rotation
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000); // Update every second (1000 milliseconds)
