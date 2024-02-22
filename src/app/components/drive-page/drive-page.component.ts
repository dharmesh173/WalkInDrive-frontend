import { Component } from '@angular/core';
import { DriveService } from '../../drive.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'drive-page',
  templateUrl: './drive-page.component.html',
  styleUrl: './drive-page.component.scss',
})
export class DrivePageComponent {
  listUp: any = true;
  showPreRequisite: any = true;
  roleList: any = [];
  roleMap: any;
  slotsMap: any;
  driveRoleIdMap: any;
  preData: any = [];
  TimeSlots: any = [];
  jobUp: any = true;
  showJobDesc: any = true;
  currentDrive: any;
  tmp: any = [];
  currentDriveTimeslots: any = [];
  rolesDetailsMap: Map<number,any> =new Map<number, any>();
  appliedData!: FormGroup;

  openBox() {
    this.listUp = !this.listUp;
    this.showPreRequisite = !this.showPreRequisite;
  }
  constructor(
    private driveService: DriveService,
    private route: ActivatedRoute
  ) {
    this.roleMap = new Object();
    this.driveRoleIdMap = new Object();
    this.slotsMap = new Object();
    // this.rolesDetailsMap = new Map();

    this.appliedData = new FormGroup({
      SlotIds: new FormControl(),
      Resume: new FormControl('url'),
      Roles: new FormControl([]),
    });
  }

  openJob() {
    this.jobUp = !this.jobUp;
    this.showJobDesc = !this.showJobDesc;
  }
  gotoTop() {
    const element: any = document.querySelector('#goUp');
    document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    // this.refreshDriveList();

    //getting id from router parameter.
    let id = this.route.snapshot.paramMap?.get('driveid');

    this.driveService.getDriveById(id).subscribe((data) => {
      this.currentDrive = data;
    });

    this.getRoles();
    this.getSlots();
    this.driveService.getTimeSlotsOfDrive(id).subscribe((data) => {
      this.currentDriveTimeslots = data;
      console.log(data);
    });
    this.driveService.getRolesById(id).subscribe((data) => {
      this.tmp = data;
    });
    this.driveService.getPreqData().subscribe((data) => {
      this.preData = data;
    });
  }
  rolesofDriveId: any = [];

  getSlots() {
    this.driveService.getAllSlots().subscribe((data) => {
      this.TimeSlots = data;
      this.TimeSlots.forEach((ele: any) => {
        this.slotsMap[ele.id] = ele.slotTiming;
      });
    });
  }

  getRoles() {
    this.driveService.getRoleList().subscribe((data) => {
      this.roleList = data;

      this.roleList.forEach((ele: any) => {
        this.roleMap[ele.roleId] = ele.roleName;
        this.rolesDetailsMap.set(ele.roleId,ele);
        console.log(this.rolesDetailsMap)
      });
    });
  }

  changecheck(e: any, roleid: any) {
    const jobroles: any = this.appliedData?.get('Roles');

    if (e.target.checked) {
      jobroles?.value.push(roleid);
    } else {
      let idx = jobroles?.value.findIndex((ele: any) => ele === roleid);
      jobroles?.value.splice(idx, 1);
      console.log(jobroles?.value);
    }
  }

  changecheck2(e: any, slotid: any) {
    const slots: any = this.appliedData?.get('SlotIds');

    if (e.target.checked) {
      // slots.value = ((slotid));
      this.appliedData.patchValue({
        SlotIds: slotid,
      });
    } else {
      //  let idx=slots?.value.findIndex((ele: any) => ele ===slotid);
      //  slots?.value.splice(idx,1);
      //  console.log(slots?.value);
    }
  }
 ii = 372;
  onApply() {
    console.log(this.appliedData.value);
    let id = this.route.snapshot.paramMap?.get('driveid') as string;
    
    let applied=this.appliedData.value;
    let cdate=new Date().toJSON().slice(0, 10);

    let drivetosend={
      Resume:"bXlyZXN1bWUucGRm",
      id:this.ii,
      slotId:parseInt(applied.SlotIds),
      driveId:parseInt(id),
      userId : 112,
      "dtCreated": "2024-01-30T21:24:16",
    "dtModified": "2024-01-30T21:24:16"
    }
    console.log(drivetosend);

    this.driveService.addDrive(drivetosend).subscribe((ok)=>{
      console.log("done bro!!!");
      applied.Roles.forEach((ele:any) => {
        let appliedhasjobrole={
          roles_role_id:parseInt(ele),
          drive_applied_id:this.ii
        }
        console.log(appliedhasjobrole);

        this.driveService.addDriveAppliedHasRoles(appliedhasjobrole).subscribe((ok)=>{
          console.log("heyyy yup!!");
          alert("applied");
        });
      });
    })
  }
}
