 
    const increase = document.getElementById("increase");
    const decrease = document.getElementById("decrease");
    const count = document.getElementById("count");
    increase.addEventListener("click", () => { count.innerHTML = +count.innerHTML + 1; }); decrease.addEventListener("click", () => { if (count.innerHTML > 100) { count.innerHTML = count.innerHTML - 1; } })

    function openNav() {
        document.getElementById("navbar").classList.toggle("start-0");
        document.body.classList.toggle("overflow_hidden");
        document.querySelector(".menu").classList.toggle("cross")
    }
 