import { Component, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'user-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss'
})
export class QualificationsComponent {
  showEducationDialog:any=true;
  listUp:any=true;
  
  techList: any=[];
  step1: boolean=false;
  step2:boolean=true;
  step3:boolean=false;


  @Input()
  EduData?:FormGroup;
  @Input()
  ProfData?:FormGroup;

  openBox(){
    this.listUp=!this.listUp;
    this.showEducationDialog=!this.showEducationDialog;
  }
  showQualificationDialog:any=true;
  listUpQ:any=true;
  openBox2(){
   this.listUpQ=!this.listUpQ;
   this.showQualificationDialog=!this.showQualificationDialog;
  }

  constructor(private userService : UserService,  private sharedService: SharedService){
    // this.EduData = new FormGroup({
    //   CollegeName: new FormControl(""),
    //   Location: new FormControl(""),
    //   Percentage: new FormControl(""),
    //   PassoutYear: new FormControl(""),
    //   Qualification: new FormControl(""),
    //   Stream: new FormControl("")
    // });

    // this.ProfData = new FormGroup({
    //   ApplicantType: new FormControl(""),
    //   Experience: new FormControl(""),
    //   CurrentCtc: new FormControl(""),
    //   ExpectedCtc: new FormControl(""),
    //   NoticePeriod: new FormControl(),
    //   PreAppear: new FormControl(""),
    //   NoticePeriodEnd: new FormControl(""),
    //   MonthOfNp: new FormControl(""),
    //   PreappearRole: new FormControl(""),
    //   tech_familiar: new FormControl([]),
    //   tech_expertise: new FormControl([])
    // })
  }

  ngOnInit(): void {
    this.refreshTechList(); 
    this.sharedService.getStep1().subscribe(val=>this.step1=val);
    this.sharedService.getStep2().subscribe(val=>this.step2=val);
    this.sharedService.getStep3().subscribe(val=>this.step3=val);
  }

  refreshTechList() {
    this.userService.getTechnologyList().subscribe((data: any) => {
      this.techList = data;
      console.log(this.techList)
    });
  }

  onSubmitE(){
    console.warn(this.EduData?.value);
    console.warn(this.ProfData?.value);
    this.sharedService.setSteps(false);
    this.sharedService.setSteps2(false);
    this.sharedService.setSteps3(true);
  }
  onSubmitP(){
    this.EduData?.reset();
    this.ProfData?.reset();
    this.sharedService.setSteps(true);
    this.sharedService.setSteps2(false);
    this.sharedService.setSteps3(false);
  }

  changecheck(e:any,roleid:any)
  {
   const jobroles :any = this.ProfData?.get('tech_familiar') ;

   if (e.target.checked) {
     jobroles?.value.push((roleid));
   } else {
     let idx=jobroles?.value.findIndex((ele: any) => ele ===roleid);
     jobroles?.value.splice(idx,1);
     console.log(jobroles?.value);
   }
  }

  changecheck2(e:any,roleid:any)
  {
   const jobroles :any = this.ProfData?.get('tech_expertise') ;

   if (e.target.checked) {
     jobroles?.value.push((roleid));
   } else {
     let idx=jobroles?.value.findIndex((ele: any) => ele ===roleid);
     jobroles?.value.splice(idx,1);
     console.log(jobroles?.value);
   }
  }




}
