import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';
import { regIn } from '../../model/logIn';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public heroes: Array<regIn>;
  info: regIn = <regIn>{};
  constructor(private log: LogService,
    private router: Router) { }

  ngOnInit() {
    
    console.log(this.router.url);
    
    this.getdata();
  }

  getdata(){
    this.log.getDetails().subscribe(res => {
      this.heroes = res.body;
    })
  }

  logout() {
    localStorage.removeItem('logIn');
    this.router.navigate(['login']);
  }
  data(a) {
    this.info = a;
  }

  Submit() {
    console.log(this.info);
    this.log.regDetails(this.info).subscribe(res => {
      this.getdata();
      this.info = <regIn>{};
    });
  }

  hel(id,i?) {
    this.log.delDetails(id).subscribe(res => {
      this.heroes.splice(i,1);
    });
  }
}
