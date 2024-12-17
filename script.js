let score = 0;
let timeLeft = 5;

const button = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
    score += 2; // 2点加算
    scoreDisplay.textContent = `スコア: ${score}`;
});

const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        button.disabled = true;
        alert(`時間切れ！あなたのスコアは ${score} です。`);
    }
}, 1000);
