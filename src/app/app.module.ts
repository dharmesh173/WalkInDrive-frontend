import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PersonInfoComponent } from './components/person-info/person-info.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ReviewRegisterComponent } from './components/review-register/review-register.component';
import { DrivePageComponent } from './components/drive-page/drive-page.component';
import { AppliedDriveComponent } from './components/applied-drive/applied-drive.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { register } from 'module';
import { HttpClientModule } from '@angular/common/http';
import { DriveService } from './drive.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserService } from './user.service';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    PersonInfoComponent,
    QualificationsComponent,
    ReviewRegisterComponent,
    DrivePageComponent,
    AppliedDriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet, RouterLink, RouterLinkActive,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    DriveService,
    provideHttpClient(withFetch()),
    UserService,
    SharedService

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
