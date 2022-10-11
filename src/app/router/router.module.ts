import {NgModule,createComponent}from "@angular/core";
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes} from "@angular/router";
import{MainComponent} from "../main/main.component"
import{CartComponent}from"../cart/cart.compoment"

let routes:Routes=[
    {path:'home',component:MainComponent,pathMatch:"full"},
    {path:'cart',component:CartComponent,pathMatch:"full"},

    {path:'**',component:MainComponent}

]

@NgModule({
  exports:[RouterModule],
   imports:[RouterModule.forRoot(routes)]
})
export class RouterModule { }
