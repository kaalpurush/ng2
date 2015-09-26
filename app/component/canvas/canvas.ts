import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'canvas',
	properties: ['level'],
})

@View({
	template: '',
    directives: []
})

class Question {
	choices: Array<string>;
	correctAnswer: string;
	answer: string;
	correct: boolean;
	pointAllocated: number = 1;
	view;

	check(answer) {
		this.answer = answer;
		return this.correct = (this.correctAnswer == this.answer);
	}
}

export class Canvas {
	level: number;
	totalQuestion: number = 5;
	questions: Array<Question>;
	currentQuestion: Question=null;

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

	generateQuestion(): Question {
		let question = new Question;
		question.choices = ['1', '2', '3', '4'];
		question.answer = '3';
		return question;
	}

	nextQuestion() {
		if(this.currentQuestion)
			this.canvas.remove(this.currentQuestion.view);
		this.currentQuestion = this.generateQuestion();
		this.questions.push(this.currentQuestion);
		this.renderQuestion(this.currentQuestion);
	}

	renderQuestion(question: Question) {
		let groupElements = [];
		question.choices.forEach(function(choice) {
			let choiceView = new fabric.Text(choice, {
				left: Math.random()*100,
				top: Math.random()*100,
				fontFamily: 'Helvetica',
				fontSize: 20,
				fill: 'red'
			});
			choiceView.text=choice;
			groupElements.push(choiceView);
		})

		question.view = new fabric.Group(groupElements, {
			left: 150,
			top: 100,
			angle: -10
		});

		this.canvas.add(question.view);
	}

	onInit() {
		this.canvas = new fabric.Canvas(this.el.nativeElement, {
			width: 800, height: 400
		});
		this.canvas.on({
			'object:selected': this.onObjectSelected
		});

		this.draw();
		this.nextQuestion();
	}

	onObjectSelected() {

	}

	draw() {
		var rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 100,
			height: 100
		});
		this.canvas.add(rect);
	}


}
