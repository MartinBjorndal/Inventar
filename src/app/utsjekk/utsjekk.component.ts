import { Component, OnInit } from '@angular/core';
import { Inventar } from '../inventar';
import { InventarService } from '../inventar.service';

@Component({
  selector: 'app-utsjekk',
  templateUrl: './utsjekk.component.html',
  styleUrls: ['./utsjekk.component.scss'],
})
export class UtsjekkComponent implements OnInit {
  inventar: Inventar[];
  error = '';
  status = '';
  success: boolean;

  constructor(private inventarService: InventarService) { }

  ngOnInit() {
    this.getInventar();
  }

  getInventar(): void {
    this.inventarService.getAll().subscribe((res: Inventar[]) => {
      this.inventar = res['body'];
      this.success = true;

      for(let inv of this.inventar){
        console.log(inv['status'])
      }
    },
    (err) => {
      this.error = err;
    });
  }
}
