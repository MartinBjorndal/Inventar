import { LoginFormComponent } from './../components/login-form/login-form.component';
import { InventarService } from 'src/app/inventar.service';
import { Component } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ InventarService ]
})


export class HomePage {
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  inventar: any;
  errorMessage: string;
  loggedin = sessionStorage.getItem('loggedin');
  constructor(private InventarService: InventarService) {
    
  }
  ngOnInit(): void {
    
    this.getInventar();
    this.dtOptions = {
      scrollY: '70vh',
      language: {
        url: '../../assets/Norwegian-Bokmal.json'
    },
      scrollCollapse: true,
      paging: true,
      lengthChange: true,
      searching: true,
      responsive: true,
      processing: true
    };
  }


  getInventar(){
    this.InventarService.getAll().subscribe(
      inventar => {
        this.inventar = inventar;
        this.dtTrigger.next();       
      },
      error => this.errorMessage = <any>error);
  }


  login(){
  }

}
