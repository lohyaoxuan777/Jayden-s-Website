let shareToWhatsappBtn = document.querySelector(".share-to-whatsapp");
let shareToMailBtn = document.querySelector(".share-to-mail");

shareToWhatsappBtn.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send/?text=https://myboringwebsite.netlify.app/&app_absent=0");
});

shareToMailBtn.addEventListener("click", () => {
    window.open("mailto:body=https://myboringwebsite.netlify.app/");
});