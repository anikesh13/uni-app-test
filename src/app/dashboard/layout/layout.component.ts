import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { regIn } from 'src/app/model/logIn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public heroes: Array<regIn>; 
  constructor(private log: LogService,
    private router:Router) { }

  ngOnInit() {
    this.log.getDetails().subscribe(res => {
      this.heroes = res.body;
    })
  }

  logout(){
    localStorage.removeItem('logIn');
    this.router.navigate(['login']);
  }

}
