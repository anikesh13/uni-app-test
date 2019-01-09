import { Component, OnInit } from '@angular/core';
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
    private log: LogService) { }

  ngOnInit() {
    this.log.getDetails().subscribe(hello => {
      console.log(hello.body);
      
    })

    if(localStorage.getItem('logIn')){
      console.log('log In');
      
    }else{
      console.log('not log in');
      
    }

    let user = JSON.parse(localStorage.getItem('list1'));
    console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
  }

  signInWithGoogle(): void {
    var t = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(t);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      // this.loggedIn = (user != null);
    });
  }

  signInWithLinkedIn(): void {
    var t1 = this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    console.log(t1);

  }

  signOut(): void {
    this.authService.signOut();
  }



}
