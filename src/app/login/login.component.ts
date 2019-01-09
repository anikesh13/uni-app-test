import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { logIn } from '../model/logIn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data1: logIn = <logIn>{};
  constructor(private log: LogService,
    private router:Router) { }

  ngOnInit() {
  }

  login(data) {
    this.log.logDetails(data).subscribe(res=> {
      localStorage.setItem('logIn', res.token)
      console.log(res);      
    });
    this.router.navigate(['']);
  }
}
