import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'search'
})

@View({
    template: `
	<div class="input-group">
		<input type="text" class="form-control" placeholder="Search for..." [(ng-model)]="q">
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
  `],
    directives: [FORM_DIRECTIVES]
})

export class Search {
	q: string;

    constructor() {
    }

	do_search() {
		alert('Search component is supposed to search: '+this.q);
	}
}
