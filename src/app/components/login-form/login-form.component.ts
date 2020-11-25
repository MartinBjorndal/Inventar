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

  constructor(private fb: FormBuilder) {

    this.loginForm = fb.group({
      'uid': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
      'pin': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(6)])]
    });
   }

   addPost(post){
     this.uid = post.uid;
     this.pin = post.pin;
   }

  ngOnInit() {}

}
