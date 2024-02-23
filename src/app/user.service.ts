import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getTechList() {
    throw new Error('Method not implemented.');
  }

  readonly APIUrl = "https://localhost:7081/api/Drives";
  
  readonly APIUrl2 = "https://localhost:7081/api/Login";
  

  constructor(private http : HttpClient) { }

  getTechnologyList() : Observable<any[]>{
    return this.http.get < any > (this.APIUrl + '/techs');
  }

  getallowedjobroles():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl + '/roles');
  }

  addStudent(val: any) {
    console.log("ddddd dndfvnsdnvdfnbdsnvdfb");
    return this.http.post(this.APIUrl2 + '/add',val);
  }

  loginStudent(val: any) {
    console.log("ddddd fdfbgn j");
    return this.http.post('https://localhost:7081/api/Token',val);
  }

  addStudentEdu(val: any) {
    return this.http.post(this.APIUrl2 + '/edu/add', val);
  }

  addStudentProf(val: any) {
    return this.http.post(this.APIUrl2 + '/prof/add', val);
  }

  public Addintofamiliertechjunction(obj:any)
  {
    return this.http.post(this.APIUrl2 + '/tech_fam/add',obj)
  }

  public Addintoexperttechjunction(obj:any)
  {
    return this.http.post(this.APIUrl2 + '/tech_exp/add',obj);
  }

}
