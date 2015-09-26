import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

class Question {
	choices: Array<string>;
	correctAnswer: string;
	answer: string = null;
	correct: boolean;
	pointAllocated: number = 1;
	viewElements: Array<any>;

	check(answer) {
		this.answer = answer;
		return this.correct = (this.correctAnswer == this.answer);
	}

	isAnswered() {
		return this.answer != null;
	}

	getCorrectAnswerViewElement() {
		let el;
		this.viewElements.forEach(element=> {
			if (this.check(element.answer))
				el = element;
		});
		return el;
	}
}

@Component({
	selector: 'game',
	properties: ['level'],
})

@View({
	template: `<button class="btn" (click)="nextQuestion()">Next</button><canvas></canvas>`,
    directives: []
})

export class Game {
	level: number;
	totalQuestion: number = 5;
	questions: Array<Question> = [];
	currentQuestion: Question = null;

	canvas;
	alphabets = [
		'أ', 'ب',
		'ت', 'ث', 'ج', 'ح',
		'خ', 'د', 'ذ', 'ر',
		'ز', 'س', 'ش', 'ص',
		'ض', 'ط', 'ظ', 'ع', 'غ‎',
		'ف', 'ق‎', 'ك',
		'ل', 'م', 'ن‎', 'و‎',
		'ﻫ', 'آ', 'ي'
	];
    constructor(private el: ElementRef) {

    }

	onInit() {
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
			'object:selected': (e) => {
				if (!this.currentQuestion.isAnswered() && e.target.answer) {
					let answer = e.target.answer;
					let childs = this.canvas.getActiveObject().getObjects();
					if (this.currentQuestion.check(answer)) {
						childs.forEach(element => {
							element.isType('circle') && element.set({ stroke: "green" });
						});
					}
					else {
						childs.forEach(element => {
							element.isType('circle') && element.set({ stroke: "red" });
						});
						let correctView = this.currentQuestion.getCorrectAnswerViewElement();
						correctView.getObjects().forEach(element => {
							element.isType('circle') && element.set({ stroke: "green" });
						});
					}
					this.canvas.renderAll();
					console.log(this.questions);
				}
			}
		});

		this.draw();
		this.nextQuestion();
	}

	generateQuestion(): Question {
		let question = new Question;
		question.choices = ['1', '2', '3', '4', '5', '6'];
		question.correctAnswer = '3';
		return question;
	}

	clearQuestion() {
		this.currentQuestion.viewElements.forEach(element=> {
			element.animate(
				{
					opacity: 0
				},
				{
					duration: 500,
					onChange: this.canvas.renderAll.bind(this.canvas),
					onComplete: () => this.canvas.remove(element)
				}
				)

		});
		this.canvas.renderAll();
	}

	nextQuestion() {
		if (this.currentQuestion)
			this.clearQuestion();
		this.currentQuestion = this.generateQuestion();
		this.questions.push(this.currentQuestion);
		this.renderQuestion(this.currentQuestion);
	}

	shuffle(array) {
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
	}

	renderQuestion(question: Question) {
		let viewElements = [];
		let choices = this.shuffle(question.choices);

		choices.forEach((choice, index) => {
			let circle = new fabric.Circle({ radius: 30, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });
			let text = new fabric.Text(choice, {
				fontFamily: 'Helvetica',
				fontSize: 20,
				fill: 'black',
				left: 25,
				top: 25
			});
			let choiceView = new fabric.Group([circle, text], {
				top: Math.floor(index / (choices.length / 2)) * 100 + Math.random() * 50,
				left: index % (choices.length / 2) * 100 + Math.random() * 50,
			});
			choiceView.answer = choice;
			this.canvas.add(choiceView);
			viewElements.push(choiceView);
		});

		question.viewElements = viewElements;

	}

	draw() {

	}


}
