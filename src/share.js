let shareToWhatsappBtn = document.querySelector(".share-to-whatsapp");

shareToWhatsappBtn.addEventListener("click", () => {
    window.open("https://api.whatsapp.com/send/?text=https://myboringwebsite.netlify.app/&app_absent=0")
});