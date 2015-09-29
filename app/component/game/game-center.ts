import {Component, View, ElementRef, FORM_DIRECTIVES, EventEmitter, ViewQuery, QueryList, bind} from 'angular2/angular2';
import {GameCanvas} from './game-canvas';
import {GameCanvas2} from './game-canvas2';
import {GameInfo} from './game-info';
import {GameScore} from './game-score';

@Component({
	selector: 'game-center',
	properties: ['type'],
})

@View({
	templateUrl: './app/component/game/game-center.html',
    directives: [bind(GameCanvas).toClass(GameCanvas2), GameInfo, GameScore]
})

export class GameCenter {
	nextlevel: EventEmitter;
	nextquestion: EventEmitter;
	gameCanvas: GameCanvas;

    constructor(private gameInfo: GameInfo, @ViewQuery(GameCanvas) private searchComponents: QueryList<GameCanvas>) {
		this.nextquestion = new EventEmitter();
    }

	onInit() {
		this.gameCanvas = this.searchComponents.first;
		this.gameInfo.startedAt = new Date();
		this.gameInfo.setTotalQuestion(5);		
	}

	nextQuestion() {
		this.gameCanvas.nextQuestion();
	}

	nextLevel() {
		this.gameCanvas.nextLevel();
	}

}
