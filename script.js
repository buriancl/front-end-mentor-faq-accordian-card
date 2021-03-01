const faqQuestion = document.getElementsByClassName("questions");

for (i = 0; i < faqQuestion.length; i++) {
  faqQuestion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
