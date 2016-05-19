import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <p>{{ 'Hello' }}</p>
        <input type="text" [value]="name" (keyup)="onKeyUp(inputElement.value)" #inputElement>
        <p>{{ values }}</p>
        <input type="text" [value]="'place holder text'" (keyup)="0" #oneWayElement>
        <p>{{ oneWayElement.value }}</p>
        <input type="text" [(ngModel)]="name">
        <p>Greetings: {{ name }}</p>
    `,
})
export class AppComponent {
	name = 'Dave';
	values = '';

	onKeyUp(value: string) {
		this.values += value + ' | ';
	}

	onTest() {
		return false;
	}

}