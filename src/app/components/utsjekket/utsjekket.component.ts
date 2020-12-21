import { Component, OnInit } from '@angular/core';
import { Inventar } from 'src/app/inventar';
import { InventarService } from 'src/app/inventar.service';

@Component({
  selector: 'app-utsjekket',
  templateUrl: './utsjekket.component.html',
  styleUrls: ['./utsjekket.component.scss'],
})
export class UtsjekketComponent implements OnInit {
  inventar: Inventar[];
  error = '';
  success: boolean;

  constructor(private inventarService: InventarService) { }

  ngOnInit() {
    this.getInventar();
  }

  getInventar(): void {
    this.inventarService.getAll().subscribe((res: Inventar[]) => {
      this.inventar = res['body'];
      this.success = true;
    },
    (err) => {
      this.error = err;
    });
  }
}
