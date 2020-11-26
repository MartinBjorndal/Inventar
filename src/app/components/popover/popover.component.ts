import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  isAdmin = true;

  constructor(private router: Router) {

   }

ngOnInit() {}

admin(){}

logut(){
  sessionStorage.clear();
  location.reload();
  this.router.navigate(['/home']);
}

}
