import {Component, View, Injectable, NgFor} from 'angular2/angular2';
import {GameInfo} from './game-info';
import {Progressbar} from '../vendor/progressbar/progressbar';

@Component({
	selector: 'game-score'
})

@View({
	templateUrl: './app/component/game/game-score.html',
    directives: [Progressbar, NgFor],
})

@Injectable()
export class GameScore {
	constructor(private gameInfo: GameInfo){
		
	}
}
