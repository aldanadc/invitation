import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));