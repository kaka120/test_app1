// angular import
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import Validation from "./validation";
import { RestApiService } from "../../../../core/service/RestApiService.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export default class RegisterComponent {
  form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private authService: RestApiService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        user_first_name: ["", Validators.required],
        user_last_name: ["", Validators.required],
        user_phone: [
          "",
          [
            Validators.required,
            Validators.minLength(10),
          ],
        ],
        user_email: ["", [Validators.required, Validators.email]],
        user_password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      },
    );
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

    let _Url = "/v1/user";
    this.authService.registerUser(this.form.value, _Url).subscribe({
      next: (res) => {
        alert("User registared " +res.user_email)
        this.form.reset();
      },
      error: (e) =>  alert(e.error),
      complete: () => console.info("complete"),
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
