const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 4,
        question: "4 + 4 = ?",
        answers: [5, 6, 7, 8],
    },
    {
        id: 5,
        question: "5 + 5 = ?",
        answers: [7, 8, 9, 10],
    }
];
const quizContainer = document.querySelector(".quiz-container");
const quizItems = [];

// Tạo phần tử HTML tương ứng với mỗi phần tử trong mảng `quizes`
quizes.forEach((quiz) => {
  const div = document.createElement("div");
  div.classList.add("quiz-item");
  div.dataset.answers = quiz.answers.join(",");
  div.innerHTML = `
    <h3>Câu ${quiz.id} : ${quiz.question}</h3>
    <div class="quiz-answer">
      ${quiz.answers
        .map(
          (answer, index) => `
          <div class="quiz-answer-item">
            <input type="radio" name="answer-${quiz.id}" value="${index}">
            <label>${answer}</label>
          </div>
        `
        )
        .join("")}
    </div>
  `;
  quizItems.push(div);
});

// Thêm các phần tử HTML vào phần tử có lớp `quiz-container`
quizItems.forEach((quizItem) => {
  quizContainer.appendChild(quizItem);
});

// Thêm sự kiện click vào nút "Random Answer"
const randomAnswerBtn = document.querySelector("#btn");
randomAnswerBtn.addEventListener("click", () => {
  quizItems.forEach((quizItem) => {
    const answerInputs = quizItem.querySelectorAll(
      'input[type="radio"][name^="answer-"]'
    );
    const randomIndex = Math.floor(Math.random() * answerInputs.length);
    answerInputs.forEach((input, index) => {
      input.checked = index === randomIndex;
    });
  });
});