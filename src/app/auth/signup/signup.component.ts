import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SignupPayload } from '../signup-payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupPayload: SignupPayload;

  constructor(
    private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      // new FormControl('gaga', [Validators.required])
      email: new FormControl('', [Validators.required, Validators.email]),
      // new FormControl('gaga@mail.com', [Validators.required, Validators.email])
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.signupPayload = {
      username: '',
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signupPayload.username = this.signupForm.get('username').value;
    this.signupPayload.email = this.signupForm.get('email').value;
    this.signupPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupPayload).subscribe(data => {
      console.log('register success');
      this.router.navigateByUrl("signup-success");
    }, error => {
      console.log("register failed")
    }
    );
  }
}