var Question = (function () {
    function Question() {
        this.answer = null;
        this.pointAllocated = 1;
    }
    Question.prototype.check = function (answer) {
        this.answer = answer;
        return this.correct = (this.correctAnswer == this.answer);
    };
    Question.prototype.isAnswered = function () {
        return this.answer != null;
    };
    Question.prototype.getCorrectAnswerView = function () {
        return this.correctView;
    };
    return Question;
})();
exports.Question = Question;
//# sourceMappingURL=question.js.map