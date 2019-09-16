import { Component, OnInit } from '@angular/core';
import {heroes} from '../heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes = heroes;
  constructor() { }

  ngOnInit() {
  }

}
