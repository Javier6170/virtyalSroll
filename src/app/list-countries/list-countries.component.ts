import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  countries: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://restcountries.com/v2/lang/es").subscribe(
      res=>this.countries = res
    )
  }
  dropCountry(event: CdkDragDrop<any>){
    console.log("ok", event)
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }
}
