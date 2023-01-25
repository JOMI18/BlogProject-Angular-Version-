import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogDbService } from 'src/app/Services/blog-db.service';
// import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  submitted = false;

  registerUsers: any;

  constructor(
    private formDetails: FormBuilder,
    private service: BlogDbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerUsers = this.formDetails.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
            ),
          ],
        ],
        confirmpassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
            ),
          ],
        ],
        phonenumber: [
          '',
          [Validators.required, Validators.pattern('^((\\+-?)|0)?[0-9]{10,}$')],
        ],
      },
      {
        validators: this.MustMatch('password', 'confirmpassword'),
      }
    );
  }

  get users() {
    return this.registerUsers.controls;
  }

  MustMatch(password: any, confirmpassword: any) {
    return (registerUsers: FormGroup) => {
      const pswrd = registerUsers.controls[password];
      const conpswrd = registerUsers.controls[confirmpassword];

      if (conpswrd.errors && !conpswrd.errors['MustMatch']) {
        return;
      }
      if (pswrd.value !== conpswrd.value) {
        conpswrd.setErrors({ MustMatch: true });
      } else {
        conpswrd.setErrors(null);
      }
    };
  }

  async submit() {
    this.submitted = true;
    console.log(this.registerUsers.value);

    // let data = await this.service.signup(this.registerUsers.value);
    // console.log(data);

    return this.service.signup(this.registerUsers.value).subscribe(
      (data) => {
        // alert('registered');
        console.log(data);
        // this.submitted = false;
        this.router.navigate(['signin']);
        this.submitted = false;
      },
      (error) => {
        alert('failed to register, check credentials');
        console.log(error.message);
        // this.submitted = false;
        this.router.navigate(['signup']);
        this.submitted = false;
      }
    );
  }
}
