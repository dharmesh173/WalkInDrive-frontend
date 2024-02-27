import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';
import * as uuid from "uuid";

@Component({
  selector: 'user-review-register',
  templateUrl: './review-register.component.html',
  styleUrl: './review-register.component.scss',
})
export class ReviewRegisterComponent {
  @Input()
  PersonalData?: FormGroup;
  @Input()
  EduData?: FormGroup;
  @Input()
  ProfData?: FormGroup;

  jobroles: any;
  alltechnology: any;

  jobrolestempmap: any;
  technologytempmap: any;

  constructor(private userService: UserService) {
    this.jobrolestempmap = new Object();
    this.technologytempmap = new Object();
  }

  ngOnInit() {
    this.userService.getallowedjobroles().subscribe((res) => {
      this.jobroles = res;
      this.jobroles.forEach((ele: any) => {
        this.jobrolestempmap[ele.roleId] = ele.roleName;
      });
    });

    this.userService.getTechnologyList().subscribe((res) => {
      this.alltechnology = res;
      this.alltechnology.forEach((ele: any) => {
        this.technologytempmap[ele.technologyId] = ele.technologyName;
      });
    });
  }

  addStudent() {
   let dhv = "dhv";
   let idd = new Date().getTime().toString().substring(1,6);
   console.log("idd +====   " + idd);
   let prof = new Date().getTime().toString().substring(3,8);
   console.log("prof +====   " + prof);
    var val = {
      userId : parseInt(idd),
      firstname: this.PersonalData?.value.Firstname,
      lastname: this.PersonalData?.value.Lastname,
      email: this.PersonalData?.value.Email,
      password: this.PersonalData?.value.Password,
      profilePic:"bXlyZXN1bWUucGRm",
      phone: this.PersonalData?.value.Phone.toString(),
      getUpdate: this.PersonalData?.value.GetUpdate==true ? 1 : 0,
      resume: "bXlyZXN1bWUucGRm",
      portfolioUrl: this.PersonalData?.value.PortfolioUrl,
      referredPersonName: this.PersonalData?.value.ReferredPersonName,
      "dtCreated": "2024-02-21T16:04:27.776Z",
      "dtModified": "2024-02-21T16:04:27.776Z"
    };
    console.log("user data")
    console.log(val);

    var vale = {
      collegeName: this.EduData?.value.CollegeName,
      location: this.EduData?.value.Location,
      percentage: parseFloat(this.EduData?.value.Percentage),
      passoutYear: parseInt(this.EduData?.value.PassoutYear),
      qualification: this.EduData?.value.Qualification,
      stream: this.EduData?.value.Stream,
      dtCreated: "2024-02-21T16:04:27.776Z",
      dtModified: "2024-02-21T16:04:27.776Z",
      userId: parseInt(idd)
    };

    var val3 = {
      Name : "Dharmesh0"
    }
    console.log(vale);
    var valp = {
      Id: parseInt(prof),
      applicantType: this.ProfData?.value.ApplicantType == true ? "Experience" : "fresher",
      experience: parseInt(this.ProfData?.value.Experience),
      currentCtc: parseInt(this.ProfData?.value.CurrentCtc),
      expectedCtc: parseInt(this.ProfData?.value.ExpectedCtc),
      noticePeriod: this.ProfData?.value.NoticePeriod == true ? 1 : 0,
      preAppear: this.ProfData?.value.PreAppear == true ? 1 : 0,
      noticePeriodEnd: this.ProfData?.value.NoticePeriodEnd,
      monthOfNp: this.ProfData?.value.MonthOfNp,
      preappearRole: this.ProfData?.value.PreappearRole,
      dtCreated: "2024-02-21T16:04:27.776Z",
      dtModified: "2024-02-21T16:04:27.776Z",
      userId: parseInt(idd)
    };
console.log("dddd");
    console.log(valp);
    try {
      
    
    this.userService.addStudent(val).subscribe((ok) => {
      console.log('Personal');
       this.userService.addStudentEdu(vale).subscribe((ok) => {
       console.log('Education');
       this.userService.addStudentProf(valp).subscribe((ok) => {
         console.log('Profesional');
          this.ProfData?.value.tech_familiar.forEach((ele: any) => {
            let objtosend = {
              professional_details_work_id: prof,
              technology_id: ele,
            };
            this.userService
              .Addintofamiliertechjunction(objtosend)
              .subscribe((ok) => {
                console.log('done fam');
              });
          });

          this.ProfData?.value.tech_expertise.forEach((ele: any) => {
            let objtosend = {
              professional_details_work_id: prof,
              technology_id: ele,
            };
            this.userService
              .Addintoexperttechjunction(objtosend)
              .subscribe((ok) => {
                console.log('done exp');
              });
          });
       });
       });
    });
  } catch (error) {
      console.log(error);
  }
  }
  
}
