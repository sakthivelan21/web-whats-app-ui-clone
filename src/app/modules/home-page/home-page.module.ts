import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { HomeMiddleContainerComponent } from './components/home-middle-container/home-middle-container.component';
import { HomeNavLinkComponent } from './components/home-nav-link/home-nav-link.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeTitleComponent,
    HomeMiddleContainerComponent,
    HomeNavLinkComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports:[
  	HomeTitleComponent
  ]
})
export class HomePageModule { }
