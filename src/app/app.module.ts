import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { AgePipe } from './age.pipe';
import { UsrsService} from './Usrs.service'

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    PipesDemoComponent,
    AgePipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsrsService],
  bootstrap: [ PipesDemoComponent]
})
export class AppModule { }
