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
    Question.prototype.getCorrectAnswerViewElement = function () {
        var _this = this;
        var el;
        this.viewElements.forEach(function (element) {
            if (_this.check(element.answer))
                el = element;
        });
        return el;
    };
    return Question;
})();
var Game = (function () {
    function Game(el) {
        this.el = el;
        this.totalQuestion = 5;
        this.questions = [];
        this.currentQuestion = null;
        this.alphabets = [
            'أ', 'ب',
            'ت', 'ث', 'ج', 'ح',
            'خ', 'د', 'ذ', 'ر',
            'ز', 'س', 'ش', 'ص',
            'ض', 'ط', 'ظ', 'ع', 'غ‎',
            'ف', 'ق‎', 'ك',
            'ل', 'م', 'ن‎', 'و‎',
            'ﻫ', 'آ', 'ي'
        ];
    }
    Game.prototype.onInit = function () {
        var _this = this;
        fabric.Object.prototype.set({
            hasBorders: false,
            hasControls: false,
            hasRotatingPoint: false,
            hoverCursor: 'pointer',
            lockMovementX: true,
            lockMovementY: true
        });
        this.canvas = new fabric.Canvas(this.el.nativeElement.childNodes[1], {
            width: 400, height: 400
        });
        this.canvas.on({
            'object:selected': function (e) {
                if (!_this.currentQuestion.isAnswered() && e.target.answer) {
                    var answer = e.target.answer;
                    var childs = _this.canvas.getActiveObject().getObjects();
                    if (_this.currentQuestion.check(answer)) {
                        childs.forEach(function (element) {
                            element.isType('circle') && element.set({ stroke: "green" });
                        });
                    }
                    else {
                        childs.forEach(function (element) {
                            element.isType('circle') && element.set({ stroke: "red" });
                        });
                        var correctView = _this.currentQuestion.getCorrectAnswerViewElement();
                        correctView.getObjects().forEach(function (element) {
                            element.isType('circle') && element.set({ stroke: "green" });
                        });
                    }
                    _this.canvas.renderAll();
                    console.log(_this.questions);
                }
            }
        });
        this.draw();
        this.nextQuestion();
    };
    Game.prototype.generateQuestion = function () {
        var question = new Question;
        question.choices = ['1', '2', '3', '4', '5', '6'];
        question.correctAnswer = '3';
        return question;
    };
    Game.prototype.clearQuestion = function () {
        var _this = this;
        this.currentQuestion.viewElements.forEach(function (element) {
            element.animate({
                opacity: 0
            }, {
                duration: 500,
                onChange: _this.canvas.renderAll.bind(_this.canvas),
                onComplete: function () { return _this.canvas.remove(element); }
            });
        });
        this.canvas.renderAll();
    };
    Game.prototype.nextQuestion = function () {
        if (this.currentQuestion)
            this.clearQuestion();
        this.currentQuestion = this.generateQuestion();
        this.questions.push(this.currentQuestion);
        this.renderQuestion(this.currentQuestion);
    };
    Game.prototype.shuffle = function (array) {
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };
    Game.prototype.renderQuestion = function (question) {
        var _this = this;
        var viewElements = [];
        var choices = this.shuffle(question.choices);
        choices.forEach(function (choice, index) {
            var circle = new fabric.Circle({ radius: 30, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });
            var text = new fabric.Text(choice, {
                fontFamily: 'Helvetica',
                fontSize: 20,
                fill: 'black',
                left: 25,
                top: 25
            });
            var choiceView = new fabric.Group([circle, text], {
                top: Math.floor(index / (choices.length / 2)) * 100 + Math.random() * 50,
                left: index % (choices.length / 2) * 100 + Math.random() * 50,
            });
            choiceView.answer = choice;
            _this.canvas.add(choiceView);
            viewElements.push(choiceView);
        });
        question.viewElements = viewElements;
    };
    Game.prototype.draw = function () {
    };
    Game = __decorate([
        angular2_1.Component({
            selector: 'game',
            properties: ['level'],
        }),
        angular2_1.View({
            template: "<button class=\"btn\" (click)=\"nextQuestion()\">Next</button><canvas></canvas>",
            directives: []
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Game);
    return Game;
})();
exports.Game = Game;
//# sourceMappingURL=game.js.map