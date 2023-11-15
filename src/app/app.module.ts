import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterComponent } from './filter/filter.component';
import { TableDataComponent } from './table-data/table-data.component';

import { FormsModule } from '@angular/forms';
import { NoticeTypeComponent } from './notice-type/notice-type.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DraftedNoticeComponent } from './drafted-notice/drafted-notice.component';
import { DraftTableComponent } from './draft-table/draft-table.component';
import { SubmittedTableComponent } from './submitted-table/submitted-table.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TableDataComponent,
    NoticeTypeComponent,
    NavBarComponent,
    DraftedNoticeComponent,
    DraftTableComponent,
    SubmittedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
