import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { logIn } from '../model/logIn';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data1: logIn = <logIn>{};
  constructor(private log: LogService) { }

  ngOnInit() {
  }

  login(data) {
    this.log.logDetails(data).subscribe(res=> {
      console.log(res);      
    });
    console.log(data);
  }
}
