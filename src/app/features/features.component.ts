import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
	title: string = "Features";
	features: string[];

	constructor(service: HeroService) {
		this.features = service.getFeatures()
	}
}
