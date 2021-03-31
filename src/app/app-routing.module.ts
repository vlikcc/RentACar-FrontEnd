import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
//import { ImageComponent } from './components/image/image.component';



const routes: Routes = [
  {path:"" , component:CarDetailComponent},
  {path:"cardetails/brand/:brandId",component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
