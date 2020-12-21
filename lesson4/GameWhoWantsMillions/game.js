let game = {
    playerScore: 0,
    questionIndex: -1,
    btnStartGame: undefined,
    btnStopGame: undefined,
    btnNextQuestion: undefined,
    init() {
        this.btnStartGame = document.getElementById('btn_start_game');
        this.btnStopGame = document.getElementById('btn_stop_game');
        this.btnNextQuestion = document.getElementById('btn_next_question');
        this.bindEventHandlersToButtons();
        renderer.init();
    },
    nextQuestion() {
        if (this.checkPlayerAnswer() !== true) {
            alert('Выберите один из вариантов ответа!');
            return;
        }

        this.questionIndex++;
        if (this.questionIndex >= config.questions.length) {
            // game over
            this.stopGame();
            return;
        }

        // отобразим следующий вопрос
        renderer.renderQuestion(config.questions[game.questionIndex]);
    },
    startGame() {
        this.playerScore = 0;
        this.questionIndex = -1;
        this.btnNextQuestion.style.display = 'initial';
        this.btnStopGame.style.display = 'initial';
        this.btnStartGame.style.display = 'none';
        this.nextQuestion();
    },
    stopGame() {
        renderer.clearQuestionAndScoreElements();
        renderer.showScore();
        this.btnNextQuestion.style.display = 'none';
        this.btnStopGame.style.display = 'none';
        this.btnStartGame.style.display = 'initial';
    },
    bindEventHandlersToButtons() {
        this.btnNextQuestion.addEventListener('click', () => game.nextQuestion());
        this.btnStopGame.addEventListener('click', () => game.stopGame());
        this.btnStartGame.addEventListener('click', () => game.startGame());
    },

    /**
     *
     * @return {boolean} false, если игрок не сделал никакого выбора
     */
    checkPlayerAnswer() {
        let question = config.questions[game.questionIndex];
        if (question === undefined) {
            return true;
        }

        let inputList = document.getElementsByName('answer');
        let playerMakeChoice = false;
        for (let input of inputList.values()) {
            if (input.checked && parseInt(input.value) === question.rightAnswerIndex) {
                this.playerScore++;
            }
            playerMakeChoice = playerMakeChoice || input.checked;
        }
        return playerMakeChoice;
    },
};
