import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TableRootComponent } from './table.root.component';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    TableRootComponent,
    DatePicker
  ],
  
  //Root Component
  bootstrap: [ 
  	TableRootComponent 
  ]
})
export class AppModule { }
