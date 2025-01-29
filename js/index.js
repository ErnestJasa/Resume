document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // const card = document.querySelector(".portfolio-card");
    const card = this.parentElement.parentElement.parentElement;
    // const text = document.querySelector(".hidden-text");
    const text =
      this.parentElement.parentElement.parentElement.nextElementSibling;

    // card.classList.toggle("move-down");
    card.classList.toggle("move-up");
    text.classList.toggle("revealed-text");
  });
});
