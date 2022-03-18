import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsAppPageComponent } from './components/whats-app-page/whats-app-page.component';

const routes: Routes = [
	{
		path:'',
		component:WhatsAppPageComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsAppPageRoutingModule { }
