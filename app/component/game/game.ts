import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

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
			width: 800, height: 400
		});
		this.canvas.on({
			'object:selected': (e) => {
				if (e.target.answer) {
					let answer = e.target.answer;
					let childs=this.canvas.getActiveObject().getObjects();
					if (this.currentQuestion.check(answer)){
						childs.forEach(element => {
							element.isType('circle') && element.set({fill: "green"});
						});
					}
					else{						
						childs.forEach(element => {
							element.isType('circle') && element.set({fill: "red"});
						});
					}
					e.target.answer=null;
					this.canvas.renderAll();
				}
			}
		});

		this.draw();
		this.nextQuestion();
	}

	generateQuestion(): Question {
		let question = new Question;
		question.choices = ['1', '2', '3', '4'];
		question.correctAnswer = '3';
		return question;
	}
	
	clearQuestion(){
		this.currentQuestion.view.forEach(element=>{
			this.canvas.remove(element);			
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

	renderQuestion(question: Question) {
		let elements = [];
		question.choices.forEach((choice) => {
			let circle = new fabric.Circle({ radius: 30, fill: 'transparent', stroke: "black", strokeWidth: 5 });
			let text = new fabric.Text(choice, {
				fontFamily: 'Helvetica',
				fontSize: 20,
				fill: 'black',
				left: 25,
				top: 25
			});
			let choiceView = new fabric.Group([circle, text], {
				left: Math.random() * 400,
				top: Math.random() * 200
			});
			choiceView.answer = choice;
			this.canvas.add(choiceView);
			elements.push(choiceView);
		});

		question.view = elements;

	}

	draw() {

	}


}
