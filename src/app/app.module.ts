import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDataComponent } from './table-data/table-data.component';
import { AppRoutingModule } from './app.routes.module';
import { DataService } from './data.service';
import { TableCardsComponent } from './table-list/table-cards/table-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableListComponent,
    TableDataComponent,
    TableCardsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
