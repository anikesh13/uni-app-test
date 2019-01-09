import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from 'angularx-social-login';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uni-app';
  list = localStorage.setItem('list', JSON.stringify('resultArray.body'));
  list1 = localStorage.setItem('list1', JSON.stringify('resultArray.body1'));
  private user: SocialUser;
  // private loggedIn: boolean;
  constructor(private authService: AuthService,
    private log: LogService,
    private router: Router) { }

  ngOnInit() {
    this.log.getDetails().subscribe(hello => {
      console.log(hello.body);

    })

    if (localStorage.getItem('logIn')) {
      console.log('log In');
      this.router.navigate(['']);
    } else {
      console.log('not log in');
      this.router.navigate(['login']);

    }

    let user = JSON.parse(localStorage.getItem('list1'));
    console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.router.navigate(['']);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.router.navigate(['']);
    });
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      this.router.navigate(['']);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }



}
