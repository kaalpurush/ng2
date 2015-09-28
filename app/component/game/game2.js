var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_1 = require('./game');
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(el) {
        _super.call(this, el);
        this.el = el;
    }
    Game.prototype.renderQuestion = function (question) {
        var _this = this;
        var viewElements = [];
        var choices = this.shuffle(question.choices);
        var layer = new Konva.Layer({
            width: this.stage.width(),
            height: this.stage.height(),
            offsetX: -20,
            offsetY: -20
        });
        choices.forEach(function (choice, index) {
            var circle = new Konva.Rect({ width: _this.stage.width() - 40, height: _this.stage.height() / 8, cornerRadius: 40, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });
            var text = new Konva.Text({ x: circle.width() / 3, y: circle.x() + circle.height() / 3, text: choice, fill: 'black', fontSize: 28, align: 'center' });
            var group = new Konva.Group({
                x: 0,
                y: index * 80,
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
                    elem.find('Rect')[0].stroke('green');
                    ion.sound.play("pass");
                }
                else {
                    elem.find('Rect')[0].stroke('red');
                    _this.currentQuestion.getCorrectAnswerView().find('Rect')[0].stroke('green');
                    ion.sound.play("fail");
                }
                layer.draw();
                console.log(_this.questions);
            });
            layer.add(group);
            _this.stage.add(layer);
        });
    };
    return Game;
})(game_1.Game);
exports.Game = Game;
//# sourceMappingURL=game2.js.map