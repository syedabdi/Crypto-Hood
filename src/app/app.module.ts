import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const routes:Routes =[
  {path:'coinmanager',loadChildren:'./coinmanager/coinmanager.module#CoinmanagerModule'},
  {path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
  {path:'**',redirectTo:'coinmanager'}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
