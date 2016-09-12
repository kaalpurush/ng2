import {Component,Output,EventEmitter} from '@angular/core';

@Component({
	selector: 'search',
	template: `
	<div class="input-group">
		<input type="text" class="form-control" placeholder="Search for..." [(ngModel)]="q">
		<span class="input-group-btn">
			<button class="btn btn-default" type="button" (click)="do_search();">Go!</button>
		</span>
	</div>	
	`,
	styles: [`
    .input-group {
      padding: 5px;
	  border:1px solid;
    }
  `]
})


export class Search {
	@Output() onsearch: EventEmitter<any> = new EventEmitter();
	q: string;

    constructor() {
    }

	do_search() {
		this.onsearch.emit(this.q);
	}
}
