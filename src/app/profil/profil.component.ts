import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  username: string = sessionStorage.getItem("name"); 
  constructor() { }

  ngOnInit() {}

  editProfile(){
    if (this.username == "Default") {
      this.username = "New"
    } else {
      this.username = "Default"
    }
  }

}
