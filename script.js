const modal = document.getElementById("feedbackModal");
const btn = document.getElementById("openFeedbackBtn");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
