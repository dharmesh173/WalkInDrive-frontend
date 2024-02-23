import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DriveService {
  readonly APIUrl = "https://localhost:7081/api/Drives";
  header!:HttpHeaders;
  constructor(private http : HttpClient) { 
    let t = localStorage.getItem('Id');
    this.header = new HttpHeaders({
        Authorization : 'Bearer '+t
    });
  }

  getDriveList() : Observable<any[]>{
    
    return this.http.get < any > (this.APIUrl + '/drives',{headers:this.header});
  }

  getRoleList() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/roles',{headers:this.header});
  }

  getRolesById(id: any) : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/rolesbyid/'  + id,{headers:this.header});
  }

  getDriveById(id: any) : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/'  + id ,{headers:this.header});
  }

  getPreqData() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/prerequisite',{headers:this.header});
  }

  getTimeSlotsOfDrive(id:any) :Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/timeslotsbydriveId/' + id ,{headers:this.header});
  }

  getslotnamebyid(slotsid:any) :Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/slotnamebyid/' + slotsid ,{headers:this.header});
  }

  getAllSlots() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/timeslots' ,{headers:this.header});
  }

  addDrive(val: any) {
    console.log("ddddd dndfvnsdnvdfnbdsnvdfb");
    return this.http.post(this.APIUrl + '/drive/driveapplied/Add',val,{headers:this.header});
  }

  addDriveAppliedHasRoles(val: any) {
    console.log("ddddd dndfvnsdnvdfnbdsnvdfb 22222");
    return this.http.post(this.APIUrl + '/drive/driveappliedjobroles/Add',val,{headers:this.header});
  }
}
