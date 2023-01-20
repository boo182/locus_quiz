const retry = document.querySelector(".retry");

const main = () => {
  const questions = questionHandler.questions;
  const displayHandler = new QuizzDisplay();
  displayHandler.questionDisplay(questions);
  form.addEventListener("click", () => {
    console.log(displayHandler.updateProgressBar());
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    displayHandler.destroyGraph();
    const g = displayHandler.getAnswers(e.target);
    if (g.length >= 3) {
      questionHandler.computeScore(g);

      chartDataGenerator.buildGraph(questionHandler.score);
      displayHandler.displayGraph();
    } else {
      displayHandler.errorMessage();
    }
  });
  retry.addEventListener("click", () => {
    window.location.reload();
  });
};
main();
