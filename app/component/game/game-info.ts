import {Component, View, Injectable} from 'angular2/angular2';
import {Question} from  './question'

@Component({
	selector: 'game-info'
})

@View({
	template: `Level: {{level}}`,
    directives: [],
})

@Injectable()
export class GameInfo {
	level: number;
	totalQuestion: number = null;
	correctInARow: number = null;
	totalQuestionArray: Array<any>;
	current: number = 0;
	questions: Array<Question> = [];
	currentQuestion: Question = null;
	startedAt: Date;
	gameOver: boolean = false;

	constructor() {

	}

	setTotalQuestion(totalQuestion: number) {
		this.totalQuestion = totalQuestion;
		this.totalQuestionArray = new Array(totalQuestion);
	}

	setCorrectInARow(correctInARow: number) {
		this.correctInARow = correctInARow;
	}

	addQuestion(question: Question) {
		this.currentQuestion = question;
		this.questions.push(question);
		this.current++;
	}

	isGameOver() {
		if (this.totalQuestion != null) {
			return this.current >= this.totalQuestion;
		}
		else if (this.correctInARow != null) {
			if (this.correctInARow > this.questions.length) return false;
			for (let i = 1; i <= this.correctInARow; i++)
				if (this.questions[this.questions.length-i].correct == false)
					return false;
		}
		return true;
	}
}
