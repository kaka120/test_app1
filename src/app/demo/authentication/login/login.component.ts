import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RestApiService } from "../../../../core/service/RestApiService.service";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router'

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import Validation from "./validation";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export default class LoginComponent {
  form: FormGroup;
  submitted = false;
  error = "";
  constructor(
    private formBuilder: FormBuilder,
    private authService: RestApiService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user_email: ["", [Validators.required, Validators.email]],
      user_password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    let _loginUrl = "/v1/login";
    this.authService.login(this.form.value, _loginUrl).subscribe({
      next: (res) => {
        console.log(res.message['token']);
        localStorage.setItem("token", res.message['token']);
        localStorage.setItem("user", this.form.value['user_email']);
        this.router.navigate(['./dashboard']);
      },
      error: (e) => alert("Login Error "+ e.error.message),
      complete: () => console.info("complete"),
    });
  }

  onReset(): void {
    console.log("aa");
    this.submitted = false;
    this.form.reset();
  }
}
