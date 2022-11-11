import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.form.group({
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
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
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
  login() {
    var email = this.loginForm.value.email;
    var pswd = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.service.login(email, pswd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            localStorage.setItem('user_id', JSON.stringify(result.userId));
            this.router.navigateByUrl('eventAdder');
          }
        },
        (result: any) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Please fill');
    }
  }
}
