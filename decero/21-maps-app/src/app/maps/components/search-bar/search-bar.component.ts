import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {

  private placesService = inject(PlacesService);

  //Debouncer para no hacer llamadas a la API con cada tecla
  private debounceTimer?: NodeJS.Timeout;

  onQueryChanged(searchInput: string = '') {
    //Si ya hay un timer en marcha, lo cancelo
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    //Despues de 1/2 seg sin escribir, hago la llamada a la API
    this.debounceTimer = setTimeout(() => {
      //Hago la llamada a la API
      this,this.placesService.searchPlace(searchInput);
    }, 500);

  }

}
