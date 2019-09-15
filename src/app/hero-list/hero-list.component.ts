import { Component } from '@angular/core';
import {heroes} from '../heroes';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  heroes = heroes;


  

}