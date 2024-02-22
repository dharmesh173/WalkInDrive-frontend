import { Component, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'user-person-info',
  templateUrl: './person-info.component.html',
  styleUrl: './person-info.component.scss',
})
export class PersonInfoComponent {
  techList: any = [];
  roleList :any = [];
  

  @Input()
  PersonalData?:FormGroup;

  step1: boolean=true;
  step2:boolean=false;
  step3:boolean=false;

  constructor(
    private userService: UserService,
    private sharedService: SharedService
    
  ) {
    // this.PersonalData = new FormGroup({
    //   Firstname: new FormControl(""),
    //   Lastname: new FormControl(""),
    //   Email: new FormControl(""),
    //   Password: new FormControl(""),
    //   ProfilePic: new FormControl(""),
    //   Phone: new FormControl(""),
    //   GetUpdate: new FormControl(""),
    //   Resume: new FormControl("url"),
    //   PortfolioUrl: new FormControl("url"),
    //   ReferredPersonName: new FormControl(""),
    //   Roles: new FormControl([])
    // });
  }

 

  // this.personalinfo=new FormGroup({
  //   fname:new FormControl(""),
  //   lname:new FormControl(""),
  //   Email:new FormControl(""),
  //   Password:new FormControl(""),
  //   Phoneno:new FormControl(""),
  //   Resume_url:new FormControl("url"),
  //   Portfolio_url:new FormControl("url"),
  //   Prefered_Job_roles:new FormControl([]),
  //   Reffred_emp:new FormControl(""),
  //   Sendjobnotification:new FormControl(false)
  // })


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.PersonalData?.value);
    this.sharedService.setSteps(false);
    this.sharedService.setSteps2(true);
    this.sharedService.setSteps3(false);
  }

  ngOnInit(): void {
    this.sharedService.getStep1().subscribe(val=>this.step1=val);
    this.sharedService.getStep2().subscribe(val=>this.step2=val);
    this.sharedService.getStep3().subscribe(val=>this.step3=val);
    this.refreshTechList();
    this.getRolesList();
  }

  refreshTechList() {
    this.userService.getTechnologyList().subscribe((data: any) => {
      this.techList = data;
    });
  }

  getRolesList(){
    this.userService.getallowedjobroles().subscribe((data :any) =>{
      this.roleList = data;
      console.log(this.roleList)
    })
  }

  changecheck(e:any,roleid:any)
  {
   const jobroles :any = this.PersonalData?.get('Roles') ;

   if (e.target.checked) {
     jobroles?.value.push((roleid));
   } else {
     let idx=jobroles?.value.findIndex((ele: any) => ele ===roleid);
     jobroles?.value.splice(idx,1);
     console.log(jobroles?.value);
   }

  }
}
