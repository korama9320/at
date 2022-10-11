import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { CartComponent } from '../cart/cart.component';
import { RegisterComponent } from '../register/register.component';
import { ApiCallComponent } from '../api-call/api-call.component';

let routes: Routes = [
  { path: 'home', component: MainComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: 'student', component: ApiCallComponent, pathMatch: 'full' },
  { path: '**', component: RegisterComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
