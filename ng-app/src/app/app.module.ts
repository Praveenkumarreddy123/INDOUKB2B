import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OpprotunitesComponent } from './components/opprotunites/opprotunites.component';
import { APP_ROUTING } from './route/app-routing.module';
import { CreateTenderComponent } from './components/create-tender/create-tender.component';
import { DataserviceService } from './services/dataservice.service';
import { Tender, SearchTenderFilter } from './classes/tender';
import { RemoveTime } from './pipes/removeTime';
import { FilterTender } from './pipes/tendersearchbyindustry'; 
@NgModule({
  declarations: [
    AppComponent,
    OpprotunitesComponent,
    CreateTenderComponent,
    RemoveTime,
    FilterTender
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [DataserviceService, Tender, SearchTenderFilter, {provide: APP_BASE_HREF, useValue: '/Projects/IndoUKB2B/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
