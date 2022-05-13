import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import {HttpClientModule} from "@angular/common/http";
import { PaginatorComponent } from './paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    ListCountriesComponent,
    PaginatorComponent,
    LineChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule,
    MatPaginatorModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
