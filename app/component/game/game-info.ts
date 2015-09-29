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
	totalQuestion: number;
	current: number = 0;
	questions: Array<Question> = [];
	currentQuestion: Question = null;
	startedAt: Date;

	constructor() {

	}
	
	addQuestion(question: Question){
		this.currentQuestion = question;
		this.questions.push(question);
		this.current++;
	}
}
