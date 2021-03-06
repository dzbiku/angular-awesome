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
import { AgmCoreModule } from '@agm/core';
import { MediaComponent } from './media/media.component'; //dla google maps

@NgModule({
  declarations: [ //internal- wewen
    AppComponent,
    ProductListComponent,
    CameraComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,   
    WelcomeComponent, MapsComponent, MediaComponent
  ],
  imports: [ //tutaj umieszczamy zewnetrzne bibiloteki
    BrowserModule, //external 
    FormsModule,
    HttpClientModule, // w deklaracji nie dziala, a jak tutaj pzenioslem to nagle bangla....
    RouterModule.forRoot([
      {path:'products', component: ProductListComponent},
      {path:'maps', component: MapsComponent},
      {path:'media', component: MediaComponent},
      {path:'products/:id',canActivate:[ProductGuardService],
       component: ProductDetailComponent},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch: 'full'},
      {path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ]), //dla routingu
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAs06Yw1kZrVY71YFQBdhssa4TK1dHTguo'
    }) //dla google maps
  ],
  providers: [ProductGuardService], //automatycznie dodał sie serwis odpowiedzialny za ochrone routingu
  bootstrap: [AppComponent]
})
export class AppModule { }
