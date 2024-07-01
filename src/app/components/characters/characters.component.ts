import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Characters } from '../../interfaces/characters';

@Component({
    selector: 'app-characters',
    standalone: true,
    templateUrl: './characters.component.html',
    styleUrl: './characters.component.css',
    imports: [NgFor, RouterLink]
})
export class CharactersComponent implements OnInit {

  characters:Characters[] = [];
  page: number = 1;

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.showCharacters();
  }

  showCharacters() {
    this.rickandmortyService.getCharacters(this.page).subscribe((data:any) => {
      this.characters = data.results;
      console.log(this.characters);
    });
  }
 
  nextPage() {
    this.page++
    this.showCharacters();
  }
  
  prevPage() {
    if(this.page > 1) {
      this.page--
      this.showCharacters();
    }
  }
}
