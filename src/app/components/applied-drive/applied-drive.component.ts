import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriveService } from '../../drive.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'applied-drive',
  templateUrl: './applied-drive.component.html',
  styleUrl: './applied-drive.component.scss',
})
export class AppliedDriveComponent {
  currentDrive: any = [];
  currentSlot: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private driveService: DriveService,
    private userService: UserService
  ) {}

  ngOnInit() {
    let driveid = this.route.snapshot.paramMap?.get('driveid');
    let slotsid = this.route.snapshot.paramMap?.get('slotid') as string;
    console.log(slotsid);

    this.driveService.getDriveById(driveid).subscribe((ele) => {
      this.currentDrive = ele;
    });

    this.driveService.getslotnamebyid(parseInt(slotsid)).subscribe((data) => {
      console.log("hll")
      console.log(data)
      this.currentSlot = data;
      console.log(this.currentDrive);
    });
  }
}
