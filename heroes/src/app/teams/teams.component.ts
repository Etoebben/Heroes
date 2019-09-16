import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { heroes} from '../heroes';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  hero;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hero = heroes[+params.get('heroId')];
    });
  }

}
