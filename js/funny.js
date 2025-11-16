const logo = document.getElementById("videoLogo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");
const player = document.getElementById("ytPlayer");
const videoURL = "https://www.youtube.com/embed/KvMY1uzSC1E?autoplay=1";

logo.addEventListener("click", () => {
  modal.style.display = "flex";
  player.src = videoURL;
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  player.src = "";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    player.src = "";
  }
});