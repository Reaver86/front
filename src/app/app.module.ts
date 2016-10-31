import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChangealiasComponent } from './changealias/changealias.component';

const routes: Routes = [
	{ path: 'userinfo', component: UserinfoComponent },
	{ path: 'changepassword', component: ChangepasswordComponent },
	{ path: 'changealias', component: ChangealiasComponent },
	{ path: '', redirectTo: 'userinfo', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		UserinfoComponent,
		ChangepasswordComponent,
		ChangealiasComponent,
		PageNotFoundComponent
	],
	imports:      [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
