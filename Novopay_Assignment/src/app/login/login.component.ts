import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public fb: FormBuilder,
    public router: Router) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)]],
      password: ['', Validators.required],
    });
  }

  login(formData) {
    localStorage.setItem('loggedInUser', formData.value.userName);
    this.router.navigate(['/home', formData.value.userName]);
  }

}
