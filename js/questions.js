const MAX = 6;
const questions = [
  {
    id: 0,
    in: "La réussite n'a pas grand chose à voir avec la chance.",
    out: "La vie est souvent une question de chance. La réussite sourit à ceux qui en ont.",
  },
  {
    id: 1,
    in: "Pour réussir une carrière, il faut travailler dur, et ceux qui font de vrais efforts réussissent mieux que les autres",
    out: "C'est souvent \"qui l'on connait\" et non pas les compétences qui font la réussite",
  },

  {
    id: 2,
    in: "Les managers arrivent dans ses positions par leurs compétences démontrées aux plans technique et humain",
    out: "Pour devenir manager, il faut surtout avoir de bonnes relations avec les dirigeants et être repérés par eux comme digne de confiance.",
  },
  {
    id: 3,
    in: "On récolte ce que l'on sème. En fin de compte, nos réussites sont le fruit de notre travail",
    out: "Avec une bonne dose de chance et une conjoncture favorable, on ne peut que réussir",
  },

  {
    id: 4,
    in: "Avec de la persévérance et des qualités interpersonnelles, on arrive souvent à assurer le leadership",
    out: "Pour être un leader, il suffit de se trouver au bon endroit au bon moment",
  },

  {
    id: 5,
    in: "Les plus grandes déceptions viennent des erreurs que l'on fait",
    out: "Les plus grandes déceptions viennent des trahisons d'autrui",
  },
];

class QuestionHandler {
  _questions = [];
  _selectedQuestions = [];
  _score;

  constructor() {
    this._questions = questions;
    this._selectQuestions();
  }

  _selectQuestions() {
    let selected = [];
    for (let i = 0; i < MAX; i++) {
      let number = Math.floor(Math.random() * (this._questions.length - 0));
      if (selected.includes(number)) {
        i = i - 1;
      } else {
        selected.push(number);
        this._selectedQuestions.push(this._questions[number]);
      }
    }
  }

  computeScore(answers) {
    this._score = answers.reduce(
      (acc, cur) => {
        if (cur === "in") acc.in++;
        else acc.out++;
        return acc;
      },
      { in: 0, out: 0 }
    );
  }

  get questions() {
    return this._selectedQuestions;
  }

  get score() {
    return this._score;
  }
}

const questionHandler = new QuestionHandler();
