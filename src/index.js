let button = document.querySelector(".button");
let score = document.querySelector("p");

let autoClickerBtn = document.querySelector(".auto-clicker");
let autoClickerQuantityHTML = document.querySelector("span.quantity-auto-clicker");
let autoClickerQuantity = 0;

score.textContent = 0;
score.style.display = "none";

button.addEventListener("click", () => {
    score.style.display = "block";
    button.textContent = "Click";
    
    score.textContent = Number(score.textContent) + 1;
    if (score.textContent == 10) {
        autoClickerBtn.setAttribute("data-title", "Gets 1 point every 3 seconds");
        autoClickerBtn.style.setProperty("cursor", "pointer");
        autoClickerBtn.style.setProperty("background", "#000");

        autoClickerBtn.style.setProperty("transition", "0.3s");         
        autoClickerBtn.classList.add("button-hover-cmp", "button-active-cmp");
    };
});

autoClickerBtn.addEventListener("click", () => {
    if (score.textContent >= 10) {
        score.textContent = Number(score.textContent) - 10;
        setInterval(() => {
            score.textContent = Number(score.textContent) + 1;
        }, 3000);
        autoClickerQuantity++;
        autoClickerQuantityHTML.textContent = `x${autoClickerQuantity}`;
    };
});