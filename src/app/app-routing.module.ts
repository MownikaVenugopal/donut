import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { DonutlistComponent } from './components/donutlist/donutlist.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"deck", component: CartComponent},
  {path:"", component:DonutlistComponent},
  { path: "details/:id", component: DonutDetailsComponent },
  { path: "details", pathMatch: "full", redirectTo: "/" },
  {path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
