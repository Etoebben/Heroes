import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [
     BrowserModule, 
     ReactiveFormsModule,
     RouterModule.forRoot([
      { path: '', component: HeroListComponent },
    ])
   ],
  declarations: [ AppComponent,
                  HeroListComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
