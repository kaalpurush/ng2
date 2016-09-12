import {Component} from '@angular/core';

@Component({
	selector: 'search',
	template: `
	<div class="input-group">
		<input type="text" class="form-control" placeholder="Search for..." [(ngModel)]="q">
		<span class="input-group-btn">
			<button class="btn btn-default" type="button" (click)="do_search($event);">Go!</button>
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
	q: string;

    constructor() {
    }

	do_search() {
		alert('Search component is supposed to search: ' + this.q);
	}
}
