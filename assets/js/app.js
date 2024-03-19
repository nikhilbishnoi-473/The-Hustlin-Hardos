 
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