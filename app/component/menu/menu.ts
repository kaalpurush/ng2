import {Component} from '@angular/core';

@Component({
	selector: 'menu',
	template: `
	<ul>
		<li *ngFor="let m of menu">
			<a href="#">{{m}}</a>
		</li>
	</ul>	
	`,
	styles: [`
    li {
      padding: 5px;
	  float:left;
	  list-style:none;
	  border:1px dashed;
    }
  `]
})



export class Menu {
	menu: Array<any>;
    constructor() {
		this.menu = ["Hola", "Hello", "Adios", "Asta la Vista"];
    }
}
