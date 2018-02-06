import { Component } from '@angular/core';
import { ProductService } from './products/product.service'; ///rejestracja serwisu

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  providers: [ProductService], ///rejestracja serwisu
  template:`
  <div>
      <nav class='navbar navbar-default'>
          <div class='container-fluid'>
              <ul class='nav navbar-nav'>
                  <li><a [routerLink]="['/welcome']">Home</a></li> 
                  <li><a [routerLink]="['/products']">Product List</a></li>
                  <li><a [routerLink]="['/maps']">Google Maps</a></li>
                  <li><a [routerLink]="['/media']">Video</a></li>
                  <li><a [routerLink]="['/products']">Data from car</a></li>
              </ul>
          </div>
      </nav>
      <div class='container'>
          <router-outlet></router-outlet>
      </div>
  </div>
`
})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';
}
