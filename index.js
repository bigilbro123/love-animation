const bosy = document.querySelector('body')

bosy.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanel = document.createElement('span');
    spanel.style.left = xpos + "px";
    spanel.style.top = ypos + "px"
    const witTs = Math.random() * 100;
    spanel.style.width = witTs + "px";
    spanel.style.height = witTs + "px"
    if (witTs <= 25) {
        spanel.style.backgroundImage = 'url("img/heart1.png")';

    } else if (witTs <= 50 & witTs >= 26) {
        spanel.style.backgroundImage = 'url("img/heart.png")';

    } else if (witTs >= 51 & witTs <= 75) {
        spanel.style.backgroundImage = 'url("img/heart2.png")';

    } else {
        spanel.style.backgroundImage = 'url("img/heart3.png")';

    }

    bosy.appendChild(spanel);
    setTimeout(() => {
        spanel.remove();
    }, 3000)
})