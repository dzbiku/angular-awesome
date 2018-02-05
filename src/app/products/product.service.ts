/**This is how to build service in Angular **/
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //dla serwisu http
import { Observable } from "rxjs/Observable"; //dla serwisu http
//lapanie wyjatkow
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
//koniec lapania wyjatkow

import { IProduct } from "./product";
import { HttpErrorResponse } from "@angular/common/http/src/response";


@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';
    constructor(private _http: HttpClient){}
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: '+ JSON.stringify(data))) //co to niby robi tutaj.....
        .catch(this.handleError); //lap wyjatek
        // return[
        //     {
        //         "productId":2,
        //         "productName": "Garden Card",
        //         "productCode": "GDN-0023",
        //         "releaseDate": "March 18, 2016",            
        //         "description": "15 Gallon",
        //         "price": 32.99,
        //         "startRating": 4.2,
        //         "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"  
        //     },
        //     {
        //         "productId":5,
        //         "productName": "Hammer",
        //         "productCode": "TBX-0048",
        //         "releaseDate": "May 21, 2016",            
        //         "description": "15 Gallon",
        //         "price": 32.99,
        //         "startRating": 4.2,
        //         "imageUrl": "https://openclipart.org/download/4793/david-benjamin-Hammer.svg"                      
        //     }
        // ];
    }
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}