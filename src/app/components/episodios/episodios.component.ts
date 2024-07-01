import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Episodes } from '../../interfaces/episodes';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit{

  episodes: Episodes[] = [];
  page: number = 1;
  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.rickandmortyService.getEpisodies(this.page).subscribe((data:any) => {
      this.episodes = data.results;
    }); 
  }

  nextPage() {
    this.page++;
    this.getEpisodes();
    }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.getEpisodes();
    }
  }  
}
