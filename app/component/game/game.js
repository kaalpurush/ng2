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
        this.pointAllocated = 1;
    }
    Question.prototype.check = function (answer) {
        this.answer = answer;
        return this.correct = (this.correctAnswer == this.answer);
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
            width: 800, height: 400
        });
        this.canvas.on({
            'object:selected': function (e) {
                if (e.target.answer) {
                    var answer = e.target.answer;
                    var childs = _this.canvas.getActiveObject().getObjects();
                    if (_this.currentQuestion.check(answer)) {
                        childs.forEach(function (element) {
                            element.isType('circle') && element.set({ fill: "green" });
                        });
                    }
                    else {
                        childs.forEach(function (element) {
                            element.isType('circle') && element.set({ fill: "red" });
                        });
                    }
                    e.target.answer = null;
                    _this.canvas.renderAll();
                }
            }
        });
        this.draw();
        this.nextQuestion();
    };
    Game.prototype.generateQuestion = function () {
        var question = new Question;
        question.choices = ['1', '2', '3', '4'];
        question.correctAnswer = '3';
        return question;
    };
    Game.prototype.clearQuestion = function () {
        var _this = this;
        this.currentQuestion.view.forEach(function (element) {
            _this.canvas.remove(element);
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
    Game.prototype.renderQuestion = function (question) {
        var _this = this;
        var elements = [];
        question.choices.forEach(function (choice) {
            var circle = new fabric.Circle({ radius: 30, fill: 'transparent', stroke: "black", strokeWidth: 5 });
            var text = new fabric.Text(choice, {
                fontFamily: 'Helvetica',
                fontSize: 20,
                fill: 'black',
                left: 25,
                top: 25
            });
            var choiceView = new fabric.Group([circle, text], {
                left: Math.random() * 400,
                top: Math.random() * 200
            });
            choiceView.answer = choice;
            _this.canvas.add(choiceView);
            elements.push(choiceView);
        });
        question.view = elements;
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