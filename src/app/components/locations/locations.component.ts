import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Locations } from '../../interfaces/locations';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit{

  locations: Locations[] = [];
  page: number = 1;

  constructor(private rickandmortyService: RickandmortyService) {}

  ngOnInit() {
    this.getLocations()
  }
  getLocations() {
    this.rickandmortyService.getLocations(this.page).subscribe((data:any) => {
      this.locations = data.results;
      console.log(this.locations);
    });
  }
  
  nextPage() {
    this.page++;
    this.getLocations();
    
  }

  prevPage() {
    if (this.page > 1) {
      this.page--
      this.getLocations();
    }
  }
}
