const form = document.querySelector("form");
const ctx = document.getElementById("myChart");
const results = document.querySelector(".results");
const quiz = document.querySelector(".quiz");
const image = document.querySelector(".img");
const questionsError = document.querySelector(".questions-error");
const userError = document.querySelector(".user-error");
const progressBar = document.querySelector(".progress-bar");
const errors = {
  questionsError,
  userError,
};

class QuizzDisplay {
  quetions = [];
  constructor() {}
  _init() {}

  _questionBuilder = (question, index) => {
    return `<div class="main__wrapper__question" id=${question.id}>
    <div class="main__wrapper__separator"></div>
    <h3>Question n°${index + 1}</h3>
    <p>
      <em>Choisissez l'affirmation qui vous semble la plus vraie :</em>
    </p>
    <div class="radio">
        <input type="radio" name="q${question.id}" id="${
      question.id
    } in" value="in" />
    <label for="q${question.id} in">
        <span>
          ${question.in}
        </span>
      </label>
    </div>
    <div class="radio">
        <input type="radio" name="q${question.id}" id="${
      question.id
    } out" value="out" /> 
    <label for="q${question.id} out">
        <span>
            ${question.out}
        </span>
      </label>
    </div>
  </div>`;
  };

  questionDisplay = (questions) => {
    form.innerHTML = "";
    this.quetions = questions;
    questions.forEach((item, index) => {
      form.innerHTML += this._questionBuilder(item, index);
    });
    form.display = form.innerHTML += `<div class="validation__wrapper">
    <p>
      <em>Afin de pouvoir voir les résultats veuillez indiquer votre email</em>
    </p>
    <input
      required
      class="__email"
      name="email"
      id="email"
      type="email"
      aria-placeholder="jean.dupont@gmail.com"
      placeholder="jean.dupont@gmail.com"
    />
    <button type="submit" class="validation __button">
      Voir les résultats
    </button>
  </div>`;
  };

  getAnswers = () => {
    const radios = document.querySelectorAll("input");
    const answers = [...radios]
      .filter((rad) => rad.checked)
      .map((rad) => rad.value);
    return answers;
  };

  displayGraph = () => {
    results.style.display = "block";
    quiz.style.display = "none";
    image.src =
      "https://wikiagile.fr/images/5/52/Which-is-your-locus-of-control_fr.png";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    this._chart = new Chart(ctx, chartDataGenerator.graph);
    progressBar.style.width = "0%";
  };

  destroyGraph = () => {
    if (!this._chart) return;
    this._chart.destroy();
    this._chart = null;
    ctx.innerHTML = "";
    return;
  };

  errorMessage(type) {
    errors[type].style.visibility = "visible";
    const errorMessage = setTimeout(() => {
      errors[type].style.visibility = "hidden";
    }, 3000);
    errorMessage.clearTimeout();
  }

  updateProgressBar() {
    const progress = Math.floor(
      (this.getAnswers().length * 100) / this.quetions.length
    );
    this.progress = progress;
    progressBar.style.width = `${progress}%`;
    return progress;
  }
}
