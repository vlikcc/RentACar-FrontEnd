import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
//import { ImageComponent } from './components/image/image.component';



const routes: Routes = [
  {path:"" , component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cardetails/car/:carId",component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
