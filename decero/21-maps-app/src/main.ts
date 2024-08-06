import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//Verificamos que el navegador permite geolocalización
if (navigator.geolocation) {
  console.log('Geolocation is available');
} else {
  alert('Geolocation is not available');
  throw new Error('Geolocation is not available');
}
