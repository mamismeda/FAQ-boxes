const btns = document.querySelectorAll(".faq-toggle");
console.log(btns);

btns.forEach((btns) => {
  btns.addEventListener("click", () => {
    btns.parentNode.classList.toggle("active");
  });
});
