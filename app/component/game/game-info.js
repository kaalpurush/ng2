var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var GameInfo = (function () {
    function GameInfo() {
        this.totalQuestion = null;
        this.correctInARow = null;
        this.current = 0;
        this.questions = [];
        this.currentQuestion = null;
        this.gameOver = false;
    }
    GameInfo.prototype.setTotalQuestion = function (totalQuestion) {
        this.totalQuestion = totalQuestion;
        this.totalQuestionArray = new Array(totalQuestion);
    };
    GameInfo.prototype.setCorrectInARow = function (correctInARow) {
        this.correctInARow = correctInARow;
    };
    GameInfo.prototype.addQuestion = function (question) {
        this.currentQuestion = question;
        this.questions.push(question);
        this.current++;
    };
    GameInfo.prototype.isGameOver = function () {
        if (this.totalQuestion != null) {
            return this.current >= this.totalQuestion;
        }
        else if (this.correctInARow != null) {
            if (this.correctInARow > this.questions.length)
                return false;
            for (var i = 1; i <= this.correctInARow; i++)
                if (this.questions[this.questions.length - i].correct == false)
                    return false;
        }
        return true;
    };
    GameInfo = __decorate([
        angular2_1.Component({
            selector: 'game-info'
        }),
        angular2_1.View({
            template: "Level: {{level}}",
            directives: [],
        }),
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameInfo);
    return GameInfo;
})();
exports.GameInfo = GameInfo;
//# sourceMappingURL=game-info.js.map