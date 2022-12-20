const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
console.log(body);


const setGradient = function () {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);