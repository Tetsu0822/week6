import "./assets/scss/all.scss";

import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";

console.log("Hello world");

document.querySelectorAll(".toggle-password").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 防止頁面跳動
    const targetId = link.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const icon = link.querySelector("i");

    // 切換輸入框的 type
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);

    // 切換 icon
    icon.classList.toggle("bi-eye-slash-fill");
    icon.classList.toggle("bi-eye-fill");

    // 保持焦點
    input.focus();
  });
});
