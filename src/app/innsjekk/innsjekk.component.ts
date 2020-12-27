import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innsjekk',
  templateUrl: './innsjekk.component.html',
  styleUrls: ['./innsjekk.component.scss'],
})
export class InnsjekkComponent implements OnInit {
  searchText = "";
  constructor() {
    
   }

  onSearchChange(event){
    this.searchText = event.detail.value;
  }

  ngOnInit() {}

}
