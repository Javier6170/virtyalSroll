import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport | undefined;

  palabras = Array(1000).fill("Electiva");

  constructor() { }

  ngOnInit(): void {
    console.log(this.palabras);
  }

  irAlFinal(){
    // @ts-ignore
    this.viewport.scrollToIndex(this.palabras.length);
  }
  irAlInicio(){
    this.viewport?.scrollToIndex(0)
  }

  irAlMitad(){
    this.viewport?.scrollToIndex(this.palabras.length/2)
  }
}
