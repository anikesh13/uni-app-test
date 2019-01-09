import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { LogService } from '../log.service';
import { logIn } from '../model/logIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data1: logIn = <logIn>{};
  constructor(private log: LogService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  login(data) {
    this.log.logDetails(data).subscribe(res => {
      localStorage.setItem('logIn', res.token)
      this.router.navigate(['']);
    });
  }

  signInWithGoogle(): void {
    var t = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(t);
    this.router.navigate(['']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.router.navigate(['']);
    });
  }

  signInWithLinkedIn(): void {
    var t1 = this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    console.log(t1);
  }
}
