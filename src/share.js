let shareToWhatsappBtn = document.querySelector(".share-to-whatsapp");
let shareToMailBtn = document.querySelector(".share-to-mail");

shareToWhatsappBtn.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send/?text=https://myboringwebsite.netlify.app/&app_absent=0");
});

shareToMailBtn.addEventListener("click", () => {
    window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&body=https://myboringwebsite.netlify.app/");
});