import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { myServiceService } from './my-service.service';

import { AppComponent } from './app.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { HomeComponent } from './home/home.component';
import { TableDataComponent } from './table-data/table-data.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'enter_data', component: EnterDataComponent },
  // { path: '**', component: PageNotFoundComponent }
  { path: 'table_data', component: TableDataComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    EnterDataComponent,
    HomeComponent,
    TableDataComponent
  ],
  imports: [
  RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
   	FormsModule
  ],
  providers: [myServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
