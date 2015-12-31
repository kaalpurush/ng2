import {Component, View, bind} from 'angular2/core';

@Component({
	selector: 'menu'
})

@View({
    template: `
	<ul>

	</ul>	
	`,	
	styles: [`
    li {
      padding: 5px;
	  float:left;
	  list-style:none;
	  border:1px dashed;
    }
  `],
    directives: []
})

export class Menu {
	menu: Array<any>;
    constructor() {
		this.menu = ["Hola", "Hello", "Adios", "Asta la Vista"];
    }
}
