import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading: boolean = false;
  
  constructor(
    private router: Router
  ) {
    this.watchRouteEvents();
  }

  /* Verifica la ejecución de la pagina en Angular */
  watchRouteEvents(): void {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart || e instanceof NavigationEnd),
        map(e => e instanceof NavigationStart)
      )
      .subscribe(
        isLoading => this.isLoading = isLoading
      );
  }

}
