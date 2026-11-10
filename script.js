const questions = document.querySelectorAll(".faq-question");

questions.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(
      button.getAttribute("aria-controls"),
    );
    const icon = button.querySelector("img");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // اقلب الحالة: لو مفتوح اقفله، ولو مقفول افتحه
    button.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
    icon.src = isOpen
      ? "./assets/images/icon-plus.svg"
      : "./assets/images/icon-minus.svg";
  });
});
