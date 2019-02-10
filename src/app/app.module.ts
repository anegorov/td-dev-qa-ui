import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {MegaMenuModule} from 'primeng/megamenu';
import { PanelComponent } from './panel/panel.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PanelComponent,
    EventRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ChartModule,
    MegaMenuModule,
    PanelMenuModule,
    FieldsetModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
