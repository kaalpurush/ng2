import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';
import {Game as Game1, Question} from './game';

export class Game extends Game1 {

	constructor(public el: ElementRef) {
		super(el);
    }

	renderQuestion(question: Question) {
		let viewElements = [];
		let choices = this.shuffle(question.choices);

		let layer = new Konva.Layer({
			width: this.stage.width(),
			height: this.stage.height(),
			offsetX: -20,
			offsetY: -20
		});

		choices.forEach((choice, index) => {
			let circle = new Konva.Rect({ width: this.stage.width()-40, height: this.stage.height() / 8, cornerRadius: 40, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });

			let text = new Konva.Text({ x: circle.width() / 3, y: circle.x() + circle.height() / 3, text: choice, fill: 'black', fontSize: 28, align: 'center' });

			let group = new Konva.Group({
				x: 0,
				y: index * 80,
			});
			group.add(circle)
			group.add(text);
			group.value = choice;

			if (question.correctAnswer == choice)
				question.correctView = group;

			group.on('mouseover', function() {
				document.body.style.cursor = 'pointer';
			});

			group.on('mouseout', function() {
				document.body.style.cursor = 'default';
			});

			layer.on('click tap', (e) => {
				if (this.currentQuestion.isAnswered()) return;
				let elem: Konva.Group = e.target.getParent();
				let answer = elem.value;
				let result = this.currentQuestion.check(answer);
				if (result) {
					elem.find('Rect')[0].stroke('green');
					ion.sound.play("pass");
				}
				else {
					elem.find('Rect')[0].stroke('red');
					this.currentQuestion.getCorrectAnswerView().find('Rect')[0].stroke('green');
					ion.sound.play("fail");
				}
				layer.draw()
				console.log(this.questions);
			});

			layer.add(group);
			this.stage.add(layer);
		});

	}

}
