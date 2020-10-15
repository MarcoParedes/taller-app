import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "src/app/components/login/login.component";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title: string = "MyApp";

  constructor(private dialog: MatDialog, public authService: AuthService) { }

  ngOnInit(): void {
  }

  public Login(): void {
    this.dialog.open(LoginComponent);
  }

  public logout(): void {
    this.authService.logout();
  }

}
