import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  private subscription: Subscription = new Subscription;
  user = new User() ;
  
  constructor(private readonly keycloak: KeycloakService, private _userService: UserService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.addUser();
      this.getUserById();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUserById(): void {
    this.subscription = this._userService.getUserById("/api/users/1").subscribe({
      next: (data: any) => {
        // Handle successful response, if needed
        console.log(data);
        this.user.username= data.username;
        this.user.email= data.email;
      },
      error: (error: any) => {
        console.error('Error getUserById:', error);
        console.error(error);
      },    // errorHandler 
    });
  }

  addUser(): void {

    let user = new User();
    user.email = "henry@example.com";
    user.username = "henry";

    this.subscription = this._userService.addUser("/api/users", user).subscribe({
      next: (data: any) => {
        // Handle successful response, if needed
        console.log(data);

      },
      error: (error: any) => {
        console.error('Error addUser:', error);
        console.error(error);
      },    // errorHandler 
    });
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}