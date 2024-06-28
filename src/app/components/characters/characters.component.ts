import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  characters:any[] = [];
  prev:string = ''
  next:string = '';
  page: number = 1;

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.showCharacters();
  }

  showCharacters() {
    this.rickandmortyService.getCharacters(this.page).subscribe((data) => {
      this.characters = data.results;
      console.log(this.characters)
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
