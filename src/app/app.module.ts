import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDataComponent } from './table-data/table-data.component';
import { AppRoutingModule } from './routing/app.routes.module';
import { DataService } from './data.service';
import { TableCardsComponent } from './table-list/table-cards/table-cards.component';
import { TableSelectComponent } from './table-list/table-select/table-select.component';
import { DataConfigComponent } from './header/data-config/data-config.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableListComponent,
    TableDataComponent,
    TableCardsComponent,
    TableSelectComponent,
    DataConfigComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
