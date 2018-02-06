import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

import { ActivatedRoute } from '@angular/router'; //musi byc
import { Router} from '@angular/router'; //musi byc dla bezpiecznego przycisku wracajacego do listy

@Component({
  //selector: 'pm-product-detail', nie potrzebny, bo nie wykorzystujemy go jako nested- zagniezdzonego
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;
  constructor(private _route: ActivatedRoute,
              private _router: Router  ) { //wstrzykniecie zaleznosci

  } 

  //teraz pobieramy tej Id z routingu, nie w konstrukotorze bo: asynchroniczny HTTP i w ogole nie chce chemy na starcie zasmiecac sobie bo obiektu moze nie byc
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); //ten + oznacza kowert ze STRING na NUMERIC w JS
    this.pageTitle +=`${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Lake",
      "productCode": "Leaf Lake",
      "releaseDate": "March 19, 2016",
      "description": "atatatatata",
      "price": 19.95,
      "startRating": 4.2,
      "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"  

    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
