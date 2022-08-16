setInterval(createSnow, 100);

function createSnow() {
   const snow = document.createElement('i');
   snow.classList.add('fas');
   snow.classList.add('fa-snowflake');
   snow.style.left = Math.random() * document.getElementById("snow").clientWidth + 'px';
   snow.style.animationDirection = Math.random() * 3 + 2 + 's';
   snow.style.opacity = Math.random();
   snow.style.fontSize = Math.random() * 10 + 10 + 'px';
   snow.style.color = "white"
   document.getElementById("snow").appendChild(snow);
   setInterval(function () {
      snow.remove()
   }, 5000)
}