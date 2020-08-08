import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerosComponent } from './tableros.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';

import {TablerosRoutingModule} from './tableros.routes';


@NgModule({
  declarations: [TablerosComponent, PiechartComponent, BarchartComponent],
  imports: [
    CommonModule,
    TablerosRoutingModule
  ]
})
export class TablerosModule { }
