const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const buttonCloseModal = document.querySelector(".fechar-modal")
const linkVideo = video.src 


buttonTrailer.addEventListener("click", () => {
    modal .classList.add("aberto");
    video.setAttribute("src", linkVideo);
});

buttonCloseModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");

});








