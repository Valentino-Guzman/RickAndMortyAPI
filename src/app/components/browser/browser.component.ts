import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterLink],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css'
})
export class BrowserComponent {
  filterCharacters: any[] = [];
  name: string = '';
  page: number = 1;
  errorMessage: string = '';
  hasNextPage:boolean = true;
  showButtons: boolean = false;
  constructor(private rickandmortyService: RickandmortyService) {}

 browser() {
  this.rickandmortyService.browser(this.name, this.page).subscribe((data) =>{
      this.filterCharacters = data.results;
      this.showButtons = true;
      this.hasNextPage = true;
      this.errorMessage = '';
    }, (error) => {
    if (error.status === 404) {
      this.filterCharacters = [];
      this.errorMessage = `No hay resultados.`;
      this.hasNextPage = false;
      this.page = 2;
    } 
  });
 }
 nextPage() {
  this.page++
  this.browser();
}
  prevPage() {
  if(this.page > 1) {
    this.page--
    this.browser();
  }
}
}
