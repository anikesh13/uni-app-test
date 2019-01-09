import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { regIn } from 'src/app/model/logIn';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public heroes: Array<regIn>; 
  constructor(private log: LogService) { }

  ngOnInit() {
    this.log.getDetails().subscribe(res => {
      this.heroes = res.body;
    })
  }

}
