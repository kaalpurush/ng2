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
    Question.prototype.getCorrectAnswerView = function () {
        return this.correctView;
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
        this.q_array = [
            { alphabets: ['أ'], options: ['أ', 'آ', 'ل', 'و‎'] },
            { alphabets: ['ب', 'ت', 'ث'], options: ['ب', 'ت', 'ث'] },
            { alphabets: ['ج', 'ح', 'خ'], options: ['ج', 'ح', 'خ'] },
            { alphabets: ['د', 'ذ'], options: ['د', 'ذ', 'ر', 'ز'] },
            { alphabets: ['ر', 'ز'], options: ['ر', 'ز', 'د', 'ذ'] },
            { alphabets: ['س', 'ش'], options: ['س', 'ش', 'ع', 'غ‎'] },
            { alphabets: ['ص', 'ض'], options: ['ص', 'ض', 'ط', 'ظ'] },
            { alphabets: ['ط', 'ظ'], options: ['ط', 'ظ', 'ص', 'ض'] },
            { alphabets: ['ع', 'غ‎'], options: ['ع', 'غ‎', 'ص', 'ض'] },
            { alphabets: ['ف'], options: ['ف', 'ق‎', 'ن‎', 'ب'] },
            { alphabets: ['ق‎'], options: ['ق‎', 'ف', 'ن‎', 'ب'] },
            { alphabets: ['ك'], options: ['ك', 'ق‎', 'ل', 'ح'] },
            { alphabets: ['ل'], options: ['ل', 'ك', 'ق‎', 'م'] },
            { alphabets: ['م'], options: ['م', 'ل', 'ك', 'ق‎'] },
            { alphabets: ['ن‎'], options: ['ن‎', 'ب', 'ت', 'ث'] },
            { alphabets: ['و‎'], options: ['و‎', 'ر', 'ز', 'ﻫ'] },
            { alphabets: ['ﻫ'], options: ['ﻫ', 'ي', 'و‎', 'ص'] },
            { alphabets: ['آ'], options: ['آ', 'و‎', 'أ', 'ل'] },
            { alphabets: ['ي'], options: ['ي', 'و‎', 'ﻫ', 'آ'] }
        ];
    }
    Game.prototype.nextLevel = function () {
        this.selectLevel(++this.level);
    };
    Game.prototype.selectLevel = function (level) {
        this.level = level;
        this.q = this.q_array[this.level - 1];
        this.nextQuestion();
    };
    Game.prototype.onInit = function () {
        ion.sound({
            sounds: [
                {
                    name: "pass"
                },
                {
                    name: "fail",
                }
            ],
            volume: 1,
            path: "sounds/",
            preload: true
        });
        this.stage = new Konva.Stage({
            container: this.el.nativeElement.childNodes[3],
            width: 400,
            height: 400
        });
        //this.draw();
        this.selectLevel(1);
    };
    Game.prototype.generateQuestion = function () {
        var q_s = this.shuffle(this.q.alphabets)[0];
        var question = new Question;
        question.choices = this.q.options;
        question.correctAnswer = q_s;
        return question;
    };
    Game.prototype.clearQuestion = function () {
        var layer = this.currentQuestion.getCorrectAnswerView().getParent();
        new Konva.Tween({
            node: layer,
            duration: .8,
            opacity: 0,
            onFinish: function () {
                layer.remove();
            }
        }).play();
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
        var layer = new Konva.Layer({
            offsetX: -100,
            offsetY: -100
        });
        choices.forEach(function (choice, index) {
            var circle = new Konva.Circle({ radius: 40, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });
            var text = new Konva.Text({ text: choice, fill: 'black', fontSize: 28, align: 'center' });
            var group = new Konva.Group({
                x: index % (choices.length / 2) * 150 + Math.random() * 50,
                y: Math.floor(index / (choices.length / 2)) * 150 + Math.random() * 50,
            });
            group.add(circle);
            group.add(text);
            group.value = choice;
            if (question.correctAnswer == choice)
                question.correctView = group;
            group.on('mouseover', function () {
                document.body.style.cursor = 'pointer';
            });
            group.on('mouseout', function () {
                document.body.style.cursor = 'default';
            });
            layer.on('click tap', function (e) {
                if (_this.currentQuestion.isAnswered())
                    return;
                var elem = e.target.getParent();
                var answer = elem.value;
                var result = _this.currentQuestion.check(answer);
                if (result) {
                    elem.find('Circle')[0].stroke('green');
                    ion.sound.play("pass");
                }
                else {
                    elem.find('Circle')[0].stroke('red');
                    _this.currentQuestion.getCorrectAnswerView().find('Circle')[0].stroke('green');
                    ion.sound.play("fail");
                }
                layer.draw();
                console.log(_this.questions);
            });
            layer.add(group);
            _this.stage.add(layer);
        });
    };
    Game.prototype.draw = function () {
    };
    Game = __decorate([
        angular2_1.Component({
            selector: 'game',
            properties: ['level'],
        }),
        angular2_1.View({
            template: "<div>Level: {{level}}<br /> Find this character: <h3>{{currentQuestion.correctAnswer}}</h3></div><button class=\"btn\" (click)=\"nextQuestion()\">Next Question</button><button class=\"btn\" (click)=\"nextLevel()\">Next Level</button><div></div>",
            directives: []
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Game);
    return Game;
})();
exports.Game = Game;
//# sourceMappingURL=game.js.map