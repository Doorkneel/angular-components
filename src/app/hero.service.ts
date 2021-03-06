import { Injectable } from '@angular/core';
import { features } from 'process';
import  *  as  data  from  'src/assets/json/data.json'

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor() {
		console.log(data["features"][0]["name"]);
	}

	getTitle(): string {
		return (
			data["title"]
		)
	}

	getMenuItems() : any[] {
		return(data["menu-items"])
}

	getFeatures() : any[] {
		return (data["features"])
  }
}
