import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { CameraComponent } from './camera/camera.component';
import { StarComponent } from './shared/star.component';
import { FormsModule} from '@angular/forms'
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { RouterModule } from '@angular/router';
import { ProductGuardService } from './products/product-guard.service';
import { MapsComponent } from './maps/maps.component'; //dla routingu

@NgModule({
  declarations: [ //internal- wewen
    AppComponent,
    ProductListComponent,
    CameraComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,   
    WelcomeComponent, MapsComponent
  ],
  imports: [ //tutaj umieszczamy zewnetrzne bibiloteki
    BrowserModule, //external 
    FormsModule,
    HttpClientModule, // w deklaracji nie dziala, a jak tutaj pzenioslem to nagle bangla....
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path:'maps', component: MapsComponent},
      {path:'products/:id',canActivate:[ProductGuardService],
       component: ProductDetailComponent},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch: 'full'},
      {path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ]), //dla routingu
  ],
  providers: [ProductGuardService], //automatycznie dodał sie serwis odpowiedzialny za ochrone routingu
  bootstrap: [AppComponent]
})
export class AppModule { }
