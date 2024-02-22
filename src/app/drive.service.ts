import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DriveService {
  readonly APIUrl = "https://localhost:7081/api/Drives";
  
  constructor(private http : HttpClient) { }

  getDriveList() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/drives');
  }

  getRoleList() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/roles');
  }

  getRolesById(id: any) : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/rolesbyid/'  + id);
  }

  getDriveById(id: any) : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/'  + id);
  }

  getPreqData() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/prerequisite');
  }

  getTimeSlotsOfDrive(id:any) :Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/timeslotsbydriveId/' + id);
  }

  getAllSlots() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/timeslots');
  }


  addDrive(val: any) {
    console.log("ddddd dndfvnsdnvdfnbdsnvdfb");
    return this.http.post(this.APIUrl + '/drive/driveapplied/Add',val);
  }

  addDriveAppliedHasRoles(val: any) {
    console.log("ddddd dndfvnsdnvdfnbdsnvdfb 22222");
    return this.http.post(this.APIUrl + '/drive/driveappliedjobroles/Add',val);
  }

}
