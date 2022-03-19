import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageModule} from '../home-page/home-page.module';
import { LoginMiddleContainerComponent } from './components/login-middle-container/login-middle-container.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginMiddleContainerComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    HomePageModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
