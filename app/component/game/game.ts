import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

export class Question {
	choices: Array<string>;
	correctAnswer: string;
	answer: string = null;
	correct: boolean;
	pointAllocated: number = 1;
	correctView: Konva.Group;

	check(answer) {
		this.answer = answer;
		return this.correct = (this.correctAnswer == this.answer);
	}

	isAnswered() {
		return this.answer != null;
	}

	getCorrectAnswerView(): Konva.Group {
		return this.correctView;
	}
}

@Component({
	selector: 'game',
	properties: ['level'],
})

@View({
	template: `<div>Level: {{level}}<br /> Find this character: <h3>{{currentQuestion.correctAnswer}}</h3></div><button class="btn" (click)="nextQuestion()">Next Question</button><button class="btn" (click)="nextLevel()">Next Level</button><div></div>`,
    directives: []
})

export class Game {
	level: number;
	totalQuestion: number = 5;
	questions: Array<Question> = [];
	currentQuestion: Question = null;
	stage: Konva.Stage;
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
	q_array = [
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
	]
	
	q:any;	

    constructor(public el: ElementRef) {
		
    }
	
	nextLevel(){
		this.selectLevel(this.level+1);
	}
	
	selectLevel(level){
		if(level>this.q_array.length)
			return alert("No more levels!")
		this.level=level;
		this.q =this.q_array[this.level-1];		
		this.nextQuestion();
	}

	onInit() {
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
		
	}

	generateQuestion(): Question {
		let q_s=this.random(this.q.alphabets);
		let question = new Question;
		question.choices = this.q.options;
		question.correctAnswer = q_s;
		return question;
	}

	clearQuestion() {
		let layer = this.currentQuestion.getCorrectAnswerView().getParent();
		new Konva.Tween({
			node: layer,
			duration: .8,
			opacity: 0,
			onFinish: () => {
				layer.remove();
			}
		}).play();
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

	random(array) {
		return array[Math.floor(Math.random() * array.length)]
	}

	renderQuestion(question: Question) {
		let viewElements = [];
		let choices = this.shuffle(question.choices);

		let layer = new Konva.Layer({
			offsetX: -100,
			offsetY: -100
		});

		choices.forEach((choice, index) => {
			let circle = new Konva.Circle({ radius: 40, fill: 'transparent', stroke: "rgb(11,183,237)", strokeWidth: 5 });

			let text = new Konva.Text({ text: choice, fill: 'black', fontSize: 28, align: 'center' });

			let group = new Konva.Group({
				x: index % (choices.length / 2) * 150 + Math.random() * 50,
				y: Math.floor(index / (choices.length / 2)) * 150 + Math.random() * 50,
			});
			group.add(circle)
			group.add(text);
			group.value = choice;
			
			if(question.correctAnswer==choice)
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
					elem.find('Circle')[0].stroke('green');
					ion.sound.play("pass");
				}
				else {
					elem.find('Circle')[0].stroke('red');
					this.currentQuestion.getCorrectAnswerView().find('Circle')[0].stroke('green');
					ion.sound.play("fail");
				}
				layer.draw()
				console.log(this.questions);
			});

			layer.add(group);
			this.stage.add(layer);
		});
		
	}

	draw() {

	}


}
