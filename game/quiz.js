// Sample Questions and Answers
const questions = [
    { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Mars" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Hemingway", "Austen"], answer: "Shakespeare" },
  ];
  
  // DOM Elements
  const quizForm = document.getElementById('quiz-form');
  const questionsContainer = document.getElementById('questions-container');
  const quizResult = document.getElementById('quiz-result');
  const scoreElement = document.getElementById('score');
  const submitBtn = document.getElementById('submit-btn');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');
  const backToGameBtn = document.getElementById('back-to-game-btn');
  
  // Generate Questions
  questions.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    questionBlock.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map((option, i) => `
        <label>
          <input type="radio" name="question-${index}" value="${option}" required>
          ${option}
        </label>
      `).join('<br>')}
    `;
    questionsContainer.appendChild(questionBlock);
  });
  
  // Submit Quiz
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let score = 0;
  
    // Check Answers
    questions.forEach((q, index) => {
      const selectedOption = quizForm[question-`${index}`].value;
      if (selectedOption === q.answer) {
        score++;
      }
    });
  
    // Show Result
    quizForm.style.display = 'none';
    quizResult.style.display = 'block';
    scoreElement.textContent = `${score}/${questions.length}`;
  });
  
  // Restart Quiz
  restartQuizBtn.addEventListener('click', () => {
    location.reload();
  });
  
  // Back to Game
  backToGameBtn.addEventListener('click', () => {
    window.location.href = 'main-game.html';
  });