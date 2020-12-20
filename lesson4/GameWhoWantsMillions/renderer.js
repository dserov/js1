let renderer = {
    init() {
        this.questionNode = document.getElementById('question');
        this.answersListNode = document.getElementById('answers_list');
        this.scoreNode = document.getElementById('score');
    },
    clearQuestionAndScoreElements() {
        let node = this.questionNode;
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
        node = this.answersListNode;
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
        node = this.scoreNode;
        while (node.firstChild) {
            node.removeChild(node.firstChild)
        }
    },
    showScore() {
        this.scoreNode.innerText = "Ваш счет: " + game.playerScore + " верных ответов из " + config.questions.length;
    },
    renderQuestion(question) {
        this.clearQuestionAndScoreElements();

        this.questionNode.appendChild(document.createTextNode(question.text));

        for (let answerIndex in question.answersList) {
            let answerText = question.answersList[answerIndex];
            let answerNode = this.makeQuestionNode(answerIndex, answerText);
            this.answersListNode.appendChild(answerNode);
            this.answersListNode.appendChild(document.createElement('br'));
        }
    },
    makeQuestionNode(answerIndex, answerText) {
        let input = document.createElement('input');
        input.type = 'radio';
        input.value = answerIndex;
        input.name = 'answer';
        let label = document.createElement('label');
        label.appendChild(input);
        label.appendChild(document.createTextNode(answerText));
        return label;
    }
};
