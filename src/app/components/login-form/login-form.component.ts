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
    this.getUser(this.uid);
    
    if(this.checkUser != undefined){
      if(this.checkUser == "User not found"){
        console.log("User not found");

      } else if (this.checkUser.pin == this.pin){
        sessionStorage.setItem("name", this.checkUser["name"]);
        sessionStorage.setItem('loggedin',"true");
        location.reload();

      } else {
        console.log(this.checkUser.pin)
        console.log("Wrong pin" + this.checkUser)
      }
  }
   }

  
  getUser(uid){
    this.BrukerService.getSingle(uid).subscribe((res: Bruker) => {
      this.checkUser = JSON.parse(JSON.stringify(res));


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