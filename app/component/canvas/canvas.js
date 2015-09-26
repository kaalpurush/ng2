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
    Question = __decorate([
        angular2_1.Component({
            selector: 'canvas',
            properties: ['level'],
        }),
        angular2_1.View({
            template: '',
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], Question);
    return Question;
})();
var Canvas = (function () {
    function Canvas(el) {
        this.el = el;
        this.totalQuestion = 5;
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
    Canvas.prototype.generateQuestion = function () {
        var question = new Question;
        question.choices = ['1', '2', '3', '4'];
        question.answer = '3';
        return question;
    };
    Canvas.prototype.nextQuestion = function () {
        if (this.currentQuestion)
            this.canvas.remove(this.currentQuestion.view);
        this.currentQuestion = this.generateQuestion();
        this.questions.push(this.currentQuestion);
        this.renderQuestion(this.currentQuestion);
    };
    Canvas.prototype.renderQuestion = function (question) {
        var groupElements = [];
        question.choices.forEach(function (choice) {
            var choiceView = new fabric.Text(choice, {
                left: Math.random() * 100,
                top: Math.random() * 100,
                fontFamily: 'Helvetica',
                fontSize: 20,
                fill: 'red'
            });
            choiceView.text = choice;
            groupElements.push(choiceView);
        });
        question.view = new fabric.Group(groupElements, {
            left: 150,
            top: 100,
            angle: -10
        });
        this.canvas.add(question.view);
    };
    Canvas.prototype.onInit = function () {
        this.canvas = new fabric.Canvas(this.el.nativeElement, {
            width: 800, height: 400
        });
        this.canvas.on({
            'object:selected': this.onObjectSelected
        });
        this.draw();
        this.nextQuestion();
    };
    Canvas.prototype.onObjectSelected = function () {
    };
    Canvas.prototype.draw = function () {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 100,
            height: 100
        });
        this.canvas.add(rect);
    };
    return Canvas;
})();
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map