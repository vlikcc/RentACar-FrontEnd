import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { UserComponent } from './components/user/user.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import { ImageComponent } from './components/image/image.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './components/car/car.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ColorComponent } from './components/color/color.component';
import { CarColorPipe } from './pipes/car-color.pipe';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ImageUpdateComponent } from './components/image-update/image-update.component';
import { RentalUpdateComponent } from './components/rental-update/rental-update.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { CarEditComponent } from './components/car-edit/car-edit.component'



@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    UserComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailComponent,
    ImageComponent,
    NaviComponent,
    CarComponent,
    CarFilterPipe,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    UserAddComponent,
    ColorComponent,
    CarColorPipe,
    CarUpdateComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    ImageUpdateComponent,
    RentalUpdateComponent,
    UserUpdateComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,   
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
