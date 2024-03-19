 
    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");
    const count = document.getElementById("count");
    increase.addEventListener("click", () => { count.innerHTML = +count.innerHTML + 1; }); decrease.addEventListener("click", () => { if (count.innerHTML > 100) { count.innerHTML = count.innerHTML - 1; } })

    function openNav() {
        document.getElementById("navbar").classList.toggle("start-0");
        document.body.classList.toggle("overflow_hidden");
        document.querySelector(".menu").classList.toggle("cross")
    }
 

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var countDownDate = new Date("Apr 25, 2024 15:37:25").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
