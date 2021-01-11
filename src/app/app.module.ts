import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
