import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinmanagerAppComponent } from './coinmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { MaterialModule } from '../shared/materials.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CoinService } from './services/coin.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorDialogComponent } from './components/calculator-dialog/calculator-dialog.component';
const routes:Routes =[
  {path:'',component:CoinmanagerAppComponent,
children:[
  {path:':id',component:MainContentComponent},
  {path:'',component:MainContentComponent}
]},
{path:'**',redirectTo:''}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
   CoinService
  ],
  declarations: [CoinmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent, CalculatorDialogComponent],
  entryComponents:[
    CalculatorDialogComponent
  ]
})
export class CoinmanagerModule { }
