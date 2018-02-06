import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = + route.url[1].path; //route sklada sie z dwoch elementow PRODUCTS/ID- nas interesuje tylko ID wiec odwolujemy do sie elementu [1] czyli drugiego
      if(isNaN(id) || id <1){
        alert("Invalid product ID");
        this._router.navigate(['/products']);
        return false;
      }; //tutaj PAMIETAC o sredniku
      return true;
      //throw new Error("Method not implemented.");
    }

}
