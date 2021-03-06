import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    title: string;
    menu: string[];

    constructor (service:HeroService) {
        this.title = service.getTitle();
        this.menu = service.getMenuItems();
    }
}