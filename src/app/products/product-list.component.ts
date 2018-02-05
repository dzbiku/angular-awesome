import { Component } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'] //pamietac o nawiasach kwadratowych DUPA DUPA DUPA NIE DZIALA...
})
export class ProductListComponent {
    pageTitle: string = "Let's start with something new!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];
    constructor(private _productService: ProductService){ //wstrzykiwanie serwisu, bez zbednych deklaracji powyzej
        //this.filteredProducts = this.products; //tutaj pusta lista od kiedy uzywamy serwisu, dlatego przenosimy do onInit
       // this.listFilter = 'Cart'; //domyslne filtrowanie
    }

    toggleImage(): void //po : zwracany typ
    {
        this.showImage = !this.showImage;
    }
    //tutaj mi brakowalo oznaczenia ze zwraca tablice a nie jeden element
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((prodct: IProduct) => prodct.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }  
    
    ngOnInit(): void{ ///dodajemy na zdarzenie on init dane, tak aby nie dodawaly sie w konstruktorze, ale np. byly ciagniete z DB
        //this.products = this._productService.getProducts(); //podejscie z danymi hard-code
        this._productService.getProducts()
                .subscribe(products => {this.products = products;//polaczenie do serwisu http
                                        this.filteredProducts = this.products;},
                            error=> this.errorMessage = <any>error); //obsluga wyjatkow
        
    }
}
