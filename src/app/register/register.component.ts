import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formgr: FormGroup;
  h: boolean = true;
  constructor() {
    this.formgr = new FormGroup({
      name: new FormControl('', Validators.maxLength(30)),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.maxLength(16)),
      cpassword: new FormControl('', Validators.maxLength(16)),
    });
  }

  ngOnInit(): void {}
}
