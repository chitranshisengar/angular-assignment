import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StoreFrontComponent } from './store-front/store-front.component';

const routes: Routes = [
  { path: 'store', component: StoreFrontComponent },
  { path: 'cart', component: CartComponent },
  {
    path: '', pathMatch: 'full', redirectTo: 'store'
  },
  {
    path: '**', redirectTo: 'store', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
