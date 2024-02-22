import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedDriveComponent } from './components/applied-drive/applied-drive.component';
import { DrivePageComponent } from './components/drive-page/drive-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { RegisterComponent } from './components/register/register.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';

const routes: Routes = [
  { path: 'step1', component: PersonInfoComponent },
  { path: 'step2', component: QualificationsComponent },
  { path: 'step3', component: ReviewRegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'drives', component: HomePageComponent },
  {path:'drives/:driveid',component:DrivePageComponent,pathMatch:"full"},
  { path: 'applied', component: AppliedDriveComponent },
  {path:'applied/:driveid',component:AppliedDriveComponent},
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
