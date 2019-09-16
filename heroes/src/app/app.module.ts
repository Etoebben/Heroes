import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopBarComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HeroComponent },
      { path: 'heroes/:heroId', component: TeamsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
