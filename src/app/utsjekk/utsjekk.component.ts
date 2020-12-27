import { Component, OnInit } from '@angular/core';
import { Inventar } from '../inventar';
import { InventarService } from '../inventar.service';

@Component({
  selector: 'app-utsjekk',
  templateUrl: './utsjekk.component.html',
  styleUrls: ['./utsjekk.component.scss'],
})
export class UtsjekkComponent implements OnInit {
  searchText = "";
  constructor() {
    
   }

  onSearchChange(event){
    this.searchText = event.detail.value;
  }

  ngOnInit() {}
}