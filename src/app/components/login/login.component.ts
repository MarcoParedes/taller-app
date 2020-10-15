import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { Login } from "src/app/models/login";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private authService: AuthService,
    private dialog: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }


  public Login(): void {
    this.authService.logIn(this.email, this.password)
      .subscribe((login: Login) => {
        console.log(login);
        if (login) this.authService.setToken(login.token);
        this.dialog.close();
      });
  }

}
