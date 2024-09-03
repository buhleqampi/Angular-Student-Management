import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './educatorSide/dashboard/dashboard.component';
import { RecordsComponent } from './educatorSide/records/records.component';
import { RegistrationComponent } from './educatorSide/registration/registration.component';
import { AnalyticsComponent } from './educatorSide/analytics/analytics.component';
import { HomeComponent } from './educatorSide/home/home.component';
import { ProfileComponent } from './studentSide/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'dashboard', component: DashboardComponent},
  {path : 'records', component: RecordsComponent},
  {path : 'registration', component: RegistrationComponent},
  {path : 'analytics', component: AnalyticsComponent},
  {path : 'profile', component: ProfileComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
