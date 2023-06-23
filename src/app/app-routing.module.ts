import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path: "about",
    component:AboutComponent
  }, {
    path:"vehicles",
    component:VehiclesComponent
  }, {
    path:"services",
    component:ServicesComponent
  },{
    path: "reviews",
    component:ReviewsComponent
  }, {
    path: "contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
