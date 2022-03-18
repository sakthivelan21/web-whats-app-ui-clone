import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	// lazy loading a module 
	/*
		Lazy Loading a module -  design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
	*/
	{
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  	},
  	{
    path: 'login',
    loadChildren: () => import('./modules/login-page/login-page.module').then(m => m.LoginPageModule)
  	},
  	{
    path: 'whats-app',
    loadChildren: () => import('./modules/whats-app-page/whats-app-page.module').then(m => m.WhatsAppPageModule)
  	},
  	// redirect route to home-page for page not found, generally ** used for page not found 
  	{ 
  		path: '**', 
  		redirectTo:'', 
  		pathMatch: 'full'  
  	},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
