import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageusersRoutingModule } from './manageusers-routing.module';
import { ManageusersComponent } from './manageusers.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ManageusersComponent,AddComponent,ListComponent],
  imports: [
    CommonModule,
    ManageusersRoutingModule
  ]
})
export class ManageusersModule { }
