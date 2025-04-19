let button = document.querySelector("button");
let score = document.querySelector("p");
score.textContent = 0;
score.style.display = "none";

button.addEventListener("click", () => {
    score.style.display = "block";
    score.textContent = Number(score.textContent) + 1;
});