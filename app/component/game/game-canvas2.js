var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game_canvas_1 = require('./game-canvas');
var GameCanvas2 = (function (_super) {
    __extends(GameCanvas2, _super);
    function GameCanvas2(el, gameInfo) {
        _super.call(this, el, gameInfo);
        this.el = el;
        this.gameInfo = gameInfo;
    }
    GameCanvas2.prototype.renderQuestion = function () {
        var _this = this;
        var question = this.gameInfo.currentQuestion;
        var viewElements = [];
        var choices = this.shuffle(question.choices);
        var layer = new Konva.Layer({
            width: this.stage.width(),
            height: this.stage.height(),
            offsetX: -20,
            offsetY: -20
        });
        choices.forEach(function (choice, index) {
            var circle = new Konva.Rect({ width: _this.stage.width() - 40, height: _this.stage.height() / 8, cornerRadius: 20, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });
            var text = new Konva.Text({ width: circle.width(), height: circle.height(), y: circle.y() + circle.height() / 2.8, text: choice, fill: 'black', fontSize: 28, align: 'center' });
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
                if (_this.gameInfo.currentQuestion.isAnswered())
                    return;
                var elem = e.target.getParent();
                var answer = elem.value;
                var result = _this.gameInfo.currentQuestion.check(answer);
                if (result) {
                    elem.find('Rect')[0].stroke('green');
                    ion.sound.play("pass");
                }
                else {
                    elem.find('Rect')[0].stroke('red');
                    _this.gameInfo.currentQuestion.getCorrectAnswerView().find('Rect')[0].stroke('green');
                    ion.sound.play("fail");
                }
                layer.draw();
                console.log(_this.gameInfo.questions);
            });
            layer.add(group);
            _this.stage.add(layer);
        });
    };
    return GameCanvas2;
})(game_canvas_1.GameCanvas);
exports.GameCanvas2 = GameCanvas2;
//# sourceMappingURL=game-canvas2.js.map