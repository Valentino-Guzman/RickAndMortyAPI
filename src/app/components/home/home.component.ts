import { Component } from '@angular/core';
import { CharactersComponent } from "../characters/characters.component";
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CharactersComponent, RouterLink]
})
export class HomeComponent {

}
