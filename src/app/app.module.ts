import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditPipe } from './pipes/credit.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './router/router.module';
import { ApiCallComponent } from './api-call/api-call.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductComponent,
    NavbarComponent,
    RegisterComponent,
    CreditPipe,
    AgePipe,
    ShopingCartComponent,
    CartComponent,
    ApiCallComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
