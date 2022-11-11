import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm = this.form.group({
    userid: ['', [Validators.required, Validators.pattern('[A-Z0-9]*')]],
    dob: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}$'
        ),
      ],
    ],
  });
  constructor(
    private form: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {}

  signUp() {
    var userId = this.signupForm.value.userid;
    var dob = this.signupForm.value.dob;
    var email = this.signupForm.value.email;
    var pswd = this.signupForm.value.password;
    if (this.signupForm.valid) {
      this.service.signup(userId, dob, email, pswd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('login');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Please fill');
    }
  }
}
