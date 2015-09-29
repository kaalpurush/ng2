import {Component, View, Injectable} from 'angular2/angular2';
import {GameInfo} from './game-info';

@Component({
	selector: 'game-score'
})

@View({
	templateUrl: './app/component/game/game-score.html',
    directives: [],
})

@Injectable()
export class GameScore {
	constructor(private gameInfo: GameInfo){
		
	}
}
