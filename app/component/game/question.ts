export class Question {
	choices: Array<string>;
	correctAnswer: string;
	answer: string = null;
	correct: boolean;
	pointAllocated: number = 1;
	correctView: any;

	check(answer) {
		this.answer = answer;
		return this.correct = (this.correctAnswer == this.answer);
	}

	isAnswered() {
		return this.answer != null;
	}

	getCorrectAnswerView() {
		return this.correctView;
	}
}