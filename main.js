const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        // Close all other accordian items
        questions.forEach((activeQuestion) => {
            if (activeQuestion !== question) {
                activeQuestion.classList.remove("active");
                activeQuestion.nextElementSibling.style.display = "none";
            }
        });

        // Toggle the clicked item
        question.classList.toggle("active");
        const content = question.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
