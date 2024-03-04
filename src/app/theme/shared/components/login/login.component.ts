// angular import
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
//import { authService } from '../../../../core/service/authService.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export default class LoginComponent {
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // getError(el) {
  //   switch (el) {
  //     case "user":
  //       if (this.formGroup.get("username").hasError("required")) {
  //         return "Username required";
  //       }
  //       break;
  //     case "pass":
  //       if (this.formGroup.get("password").hasError("required")) {
  //         return "Password required";
  //       }
  //       break;
  //     default:
  //       return "";
  //   }
  // }
  onSubmit(post) {
    // this.post = post;
  }
}
