import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MaterialModule } from '../material/material.module'

@Component({
  standalone: true,
  selector: 'city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css',
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
})

export class CitySearchComponent implements OnInit{
  public search = new FormControl();

  ngOnInit(): void {
  }
}
