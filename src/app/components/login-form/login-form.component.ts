import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



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

  constructor(private fb: FormBuilder) {

    this.loginForm = fb.group({
      'uid': [null, Validators.compose([Validators.pattern('^[0-9]+$'),
      Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
      'pin': [null, Validators.compose([
      Validators.required, Validators.minLength(4), Validators.maxLength(6)])]
    });
   }

   addPost(post){
     this.uid = post.uid;
     this.pin = post.pin;
     sessionStorage.setItem('loggedin',"true");
     console.log('UID: ', this.uid,'Pin: ', this.pin)
     location.reload();
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
