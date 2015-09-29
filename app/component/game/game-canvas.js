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
var question_1 = require('./question');
var game_info_1 = require('./game-info');
var GameCanvas = (function () {
    function GameCanvas(el, gameInfo) {
        this.el = el;
        this.gameInfo = gameInfo;
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
    GameCanvas.prototype.nextLevel = function () {
        this.selectLevel(this.gameInfo.level + 1);
    };
    GameCanvas.prototype.selectLevel = function (level) {
        if (level > this.q_array.length)
            return alert("No more levels!");
        this.gameInfo.level = level;
        this.gameInfo.questions = [];
        this.gameInfo.current = 0;
        this.q = this.q_array[this.gameInfo.level - 1];
        this.nextQuestion();
    };
    GameCanvas.prototype.onInit = function () {
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
            container: this.el.nativeElement.childNodes[1],
            width: 400,
            height: 400
        });
        //this.draw();
        this.selectLevel(1);
    };
    GameCanvas.prototype.generateQuestion = function () {
        var q_s = this.random(this.q.alphabets);
        var question = new question_1.Question;
        question.choices = this.q.options;
        question.correctAnswer = q_s;
        return question;
    };
    GameCanvas.prototype.clearQuestion = function () {
        var layer = this.gameInfo.currentQuestion.getCorrectAnswerView().getParent();
        new Konva.Tween({
            node: layer,
            duration: .8,
            opacity: 0,
            onFinish: function () {
                layer.remove();
            }
        }).play();
    };
    GameCanvas.prototype.nextQuestion = function () {
        if (this.gameInfo.isGameOver())
            return alert("No more questions on this level!");
        if (this.gameInfo.currentQuestion)
            this.clearQuestion();
        this.gameInfo.addQuestion(this.generateQuestion());
        this.renderQuestion();
    };
    GameCanvas.prototype.shuffle = function (array) {
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
    GameCanvas.prototype.random = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    GameCanvas.prototype.renderQuestion = function () {
        var _this = this;
        var question = this.gameInfo.currentQuestion;
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
                if (_this.gameInfo.currentQuestion.isAnswered())
                    return;
                var elem = e.target.getParent();
                var answer = elem.value;
                var result = _this.gameInfo.currentQuestion.check(answer);
                if (result) {
                    elem.find('Circle')[0].stroke('green');
                    ion.sound.play("pass");
                }
                else {
                    elem.find('Circle')[0].stroke('red');
                    _this.gameInfo.currentQuestion.getCorrectAnswerView().find('Circle')[0].stroke('green');
                    ion.sound.play("fail");
                }
                layer.draw();
                console.log(_this.gameInfo.questions);
                if (_this.gameInfo.isGameOver())
                    _this.showResult();
            });
            layer.add(group);
            _this.stage.add(layer);
        });
    };
    GameCanvas.prototype.showResult = function () {
        //alert('Game Over!');
    };
    GameCanvas.prototype.draw = function () {
    };
    GameCanvas = __decorate([
        angular2_1.Component({
            selector: 'game-canvas',
            properties: ['nextlevel', 'nextquestion']
        }),
        angular2_1.View({
            template: "<div (nextlevel)=\"nextLevel($event)\" (nextquestion)=\"nextQuestion($event)\">Find this character: <h3 *ng-if=\"gameInfo.currentQuestion\">{{gameInfo.currentQuestion.correctAnswer}}</h3></div><div></div>",
            directives: [angular2_1.NgIf],
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, game_info_1.GameInfo])
    ], GameCanvas);
    return GameCanvas;
})();
exports.GameCanvas = GameCanvas;
//# sourceMappingURL=game-canvas.js.map