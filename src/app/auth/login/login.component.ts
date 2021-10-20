import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {AuthService} from "../auth.service";
import {FormType} from "./form-type.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public formTypes = FormType;
  public formType: FormType = FormType.LOGIN;

  constructor(
    private local: LocalStorageService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();

      return;
    }

    const credentials = { ...this.loginForm.value };

    this.formType === FormType.LOGIN
      ? this.authService.signIn(credentials)
      : this.authService.signUp(credentials);

    this.loginForm.reset();
  }

  public changeType(): void {
      this.formType = this.formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN;
  }
}
