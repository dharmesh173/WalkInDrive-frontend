import { Component, OnInit } from '@angular/core';
import { DriveService } from '../../drive.service';

@Component({
  selector: 'drives-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  driveList: any = [];
  roleList: any = [];
  roleMap: any;
  jobroleobject!: Map<any, any>;
  driveRoleIdMap: any;
  constructor(private driveService: DriveService) {
    this.roleMap = new Object();
    this.driveRoleIdMap = new Object();
    this.jobroleobject = new Map();
  }
  tmp: any = [];
  ngOnInit(): void {
    // this.refreshDriveList();
    this.getRoles();
    this.driveService.getDriveList().subscribe((data) => {
      this.driveList = data;
      console.log(this.driveList);
      this.driveList.forEach((ele: any) => {
        console.log('mission1');
        this.driveService.getRolesById(ele.driveId).subscribe((data) => {
          console.log(data);
          console.log('mission2');
          this.tmp = data;
          this.jobroleobject.set(ele.driveId, data);
          console.log(this.jobroleobject);
        });
      });
    });
  }
  rolesofDriveId: any = [];

  refreshDriveList() {
    this.driveService.getDriveList().subscribe((data) => {
      this.driveList = data;
    });
  }

  getRoles() {
    this.driveService.getRoleList().subscribe((data) => {
      this.roleList = data;
      this.roleList.forEach((ele: any) => {
        this.roleMap[ele.roleId] = ele.roleName;
      });
    });
  }
}
