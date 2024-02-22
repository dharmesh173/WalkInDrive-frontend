import { Component, input } from '@angular/core';
import { SharedService } from '../../shared.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
 step1 :any=true;
 step2: any=false;
 step3:any=false;
 PersonalData?: FormGroup;
 EduData?:FormGroup;
 ProfData?:FormGroup;

 constructor( private sharedService: SharedService){
  this.PersonalData = new FormGroup({
    Firstname: new FormControl(""),
    Lastname: new FormControl(""),
    Email: new FormControl(""),
    Password: new FormControl(""),
    ProfilePic: new FormControl("url"),
    Phone: new FormControl(""),
    GetUpdate: new FormControl(""),
    Resume: new FormControl("url"),
    PortfolioUrl: new FormControl(""),
    ReferredPersonName: new FormControl(""),
    Roles: new FormControl([])

 });

 this.EduData = new FormGroup({
  CollegeName: new FormControl(""),
  Location: new FormControl(""),
  Percentage: new FormControl(""),
  PassoutYear: new FormControl(""),
  Qualification: new FormControl(""),
  Stream: new FormControl("")
});

this.ProfData = new FormGroup({
  ApplicantType: new FormControl(""),
  Experience: new FormControl(""),
  CurrentCtc: new FormControl(""),
  ExpectedCtc: new FormControl(""),
  NoticePeriod: new FormControl(),
  PreAppear: new FormControl(""),
  NoticePeriodEnd: new FormControl(""),
  MonthOfNp: new FormControl(""),
  PreappearRole: new FormControl(""),
  tech_familiar: new FormControl([]),
  tech_expertise: new FormControl([])
});

}

 ngOnInit(){
  this.sharedService.getStep1().subscribe(val=>this.step1=val);
    this.sharedService.getStep2().subscribe(val=>this.step2=val);
    this.sharedService.getStep3().subscribe(val=>this.step3=val);
 }
}
