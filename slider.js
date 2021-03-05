const slider = document.querySelectorAll('#slider img');

slider.forEach((e) => {
  e.style.opacity = 0;
});
slider[0].style.opacity = 100;

let i = 0;

window.setInterval(() => {
  if (i === slider.length - 1) {
    i = 0;
  } else {
    i += 1;
  }
  slider.forEach((e) => {
    e.style.opacity = 0;
  });
  slider[i].style.opacity = 100;
}, 5000);
