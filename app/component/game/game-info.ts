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
	totalQuestionArray: Array<any>;
	current: number = 0;
	questions: Array<Question> = [];
	currentQuestion: Question = null;
	startedAt: Date;

	constructor() {
		
	}
	
	setTotalQuestion(totalQuestion:number){
		this.totalQuestion=totalQuestion;
		this.totalQuestionArray=new Array(totalQuestion);
	}
	
	addQuestion(question: Question){
		this.currentQuestion = question;
		this.questions.push(question);
		this.current++;
	}
}
