import { BrukerService } from './../../bruker.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bruker } from 'src/app/bruker';






@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  
  loginForm: FormGroup;
  post: any;
  uid: string = '';
  pin: string = '';
  uidAlert = 'Dette feltet er påkrevd, og må inneholde mellom 4 og 6 tall';
  pinAlert = 'Dette feltet er påkrevd, og må inneholde mellom 4 og 6 tall';
  users: Bruker[];
  user: Bruker;
  error = '';
  status = '';
  checkUser: any;
  success: boolean;


  constructor(private fb: FormBuilder, private BrukerService: BrukerService) {

    this.loginForm = fb.group({
      'uid': [null, Validators.compose([Validators.pattern('^[0-9]+$'),
      Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
      'pin': [null, Validators.compose([Validators.pattern('^[0-9]+$'),
      Validators.required, Validators.minLength(4), Validators.maxLength(6)])]
    });
   }

   login(post){
    this.uid = post.uid;
    this.pin = post.pin;
    sessionStorage.setItem("name", "Default");
    sessionStorage.setItem('loggedin',"true");
    location.reload();
    this.getUser(this.uid);
    if(this.pin != undefined){
      console.log(this.checkUser)
      console.log(this.pin)
      console.log(this.checkUser["pin"])
      sessionStorage.setItem("name", this.checkUser["name"]);
      sessionStorage.setItem('loggedin',"true");
      location.reload();

      
    }}

  getUser(uid){
    this.BrukerService.getSingle(uid).subscribe((res: string) => {
      this.checkUser = JSON.parse(res);
    },
    (err) => {
      this.error = err;
    });
  }

  ngOnInit() {
    this.loginForm.get('uid').valueChanges.subscribe((uid) => {
      if(uid === 'admin' || uid === 'Admin'){
        this.loginForm.get('pin').setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(6)]);
        this.loginForm.get('uid').setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(6)]);
      }
    });

 

}

}