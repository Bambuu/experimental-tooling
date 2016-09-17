import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-will-it-blend',
	templateUrl: './will-it-blend.component.html',
	styleUrls: ['./will-it-blend.component.css']
})
export class WillItBlendComponent implements OnInit {

	willItBlend: Boolean = false;
	blendedTimes: number = 0;

	constructor() {
	}

	ngOnInit() {
	}

	blendIt() {
		this.blendedTimes++;

		if(this.blendedTimes >= 5){
			this.willItBlend = true;
		}
	}

}
