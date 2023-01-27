const retry = document.querySelector(".retry");

const main = () => {
  const questions = questionHandler.questions;
  const displayHandler = new QuizzDisplay();
  displayHandler.questionDisplay(questions);

  form.addEventListener("click", () => {
    displayHandler.updateProgressBar();
  });

  form.addEventListener("submit", function (e) {
    console.log(process.env);
    e.preventDefault();
    displayHandler.destroyGraph();
    const g = displayHandler.getAnswers(e.target);
    const userEmail = document.querySelector(".__email");
    console.log(userEmail.value);
    if (!userEmail?.value) {
      return displayHandler.errorMessage("userError");
    }

    if (g.length >= questions.length) {
      questionHandler.computeScore(g);

      chartDataGenerator.buildGraph(questionHandler.score);
      displayHandler.displayGraph();
      sendMail(userEmail.value, questionHandler.score);
    } else {
      return displayHandler.errorMessage("questionsError");
    }
  });
  retry.addEventListener("click", () => {
    window.location.reload();
  });
};
main();
