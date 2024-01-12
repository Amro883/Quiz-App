const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }
];

const quiz = document.querySelector(".main-quaiz");
const inputs = document.querySelectorAll(".input");
const question = document.querySelector(".quitstion");
const a = document.querySelector(".a-text");
const b = document.querySelector(".b-text");
const c = document.querySelector(".c-text");
const d = document.querySelector(".d-text");
const button = document.querySelector("button");

let x = 0;
let score = 0;
const desSelectAll = () => {
  inputs.forEach((input) => {
    input.checked = false;
  });
};
const loadQuiz = () => {
  desSelectAll();
  let quizselect = quizData[x];
  question.innerText = quizselect.question;
  a.innerText = quizselect.a;
  b.innerText = quizselect.b;
  c.innerText = quizselect.c;
  d.innerText = quizselect.d;
};
loadQuiz();
let answer;

const answerSelect = () => {
  inputs.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  return answer;
};
button.addEventListener("click", () => {
  answer = answerSelect();
  let quizselect = quizData[x];
  // console.log(answer);
  // console.log(quizselect.correct);
  if (answer) {
    if (answer === quizselect.correct) {
      score++;
    }
    x++;
    if (x < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>

      <button onclick="location.reload()">Reload</button>
  `;
    }
  }
});
