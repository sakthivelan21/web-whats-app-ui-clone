import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsAppPageRoutingModule } from './whats-app-page-routing.module';
import { WhatsAppPageComponent } from './components/whats-app-page/whats-app-page.component';


@NgModule({
  declarations: [
    WhatsAppPageComponent
  ],
  imports: [
    CommonModule,
    WhatsAppPageRoutingModule
  ]
})
export class WhatsAppPageModule { }
