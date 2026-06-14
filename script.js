document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btn-red');
    const btnBlue = document.getElementById('btn-blue');
    const btnReset = document.getElementById('btn-reset');
    const gameArea = document.getElementById('game-area');
    const resultArea = document.getElementById('result-area');
    const resultMessage = document.getElementById('result-message');

    function playGame() {
        // Randomly decide win or lose (50% chance)
        const isWin = Math.random() >= 0.5;

        // Hide game buttons, show result
        gameArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
        
        // Remove animation class if it exists to restart it
        resultArea.classList.remove('pop-in');
        
        // Force reflow to restart animation
        void resultArea.offsetWidth;
        
        // Add animation class
        resultArea.classList.add('pop-in');

        if (isWin) {
            resultMessage.textContent = '¡Has ganado! 🎉';
            resultMessage.style.color = '#2ed573';
        } else {
            resultMessage.textContent = '¡Has perdido! 😢';
            resultMessage.style.color = '#ff4757';
        }
    }

    function resetGame() {
        gameArea.classList.remove('hidden');
        resultArea.classList.add('hidden');
    }

    btnRed.addEventListener('click', playGame);
    btnBlue.addEventListener('click', playGame);
    btnReset.addEventListener('click', resetGame);
});
