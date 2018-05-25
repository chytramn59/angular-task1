import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { EnterDataComponent } from './enter-data/enter-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterDataComponent
  ],
  imports: [
    BrowserModule,
   	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
