import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './educatorSide/navbar/navbar.component';
import { DashboardComponent } from './educatorSide/dashboard/dashboard.component';
import { RecordsComponent } from './educatorSide/records/records.component';
import { RegistrationComponent } from './educatorSide/registration/registration.component';
import { AnalyticsComponent } from './educatorSide/analytics/analytics.component';
import { HomeComponent } from './educatorSide/home/home.component';
import { ProfileComponent } from './studentSide/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    RecordsComponent,
    RegistrationComponent,
    AnalyticsComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
