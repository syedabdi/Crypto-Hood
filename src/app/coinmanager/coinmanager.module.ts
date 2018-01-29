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

const routes:Routes =[
  {path:'',component:CoinmanagerAppComponent,
children:[
  {path:'',component:MainContentComponent}
]},
{path:'**',redirectTo:''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoinmanagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent]
})
export class CoinmanagerModule { }
