//your JS code here. If required.
let modal = document.getElementById("modal");

document.getElementById("openBtn").onclick = function () {
  modal.style.display = "block";
};

document.getElementById("closeBtn").onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};