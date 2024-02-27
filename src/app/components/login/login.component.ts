import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  loginData!:FormGroup;
  dataa: any = [];
  user_idd : any = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginData = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  } 

  ngOnInit(){
   var islogin = localStorage.getItem('Id');
  //  if(islogin!=null)
  //   {
  //     this.router.navigate(['/drives']);
  //   }
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.loginData.value);
    var val = {
      Email: this.loginData.value.username,
      Password: this.loginData.value.password,
    };

    console.log(val);
    this.userService.loginStudent(val).subscribe((ele: any) => {
      console.log('helloji');

      this.dataa = ele;
       localStorage.setItem('Id', this.dataa.tt);
       this.userService.getStudentByEmail(val.Email).subscribe((dd:any) =>{
         console.log(dd.user_id)
        this.user_idd = dd;
      
        localStorage.setItem('user_id',dd.user_id);
        //  console.log(this.userD.userId);
       })
       alert(this.dataa.tt);
        // alert(this.user_idd.user_id)
      //  localStorage.setItem('user_id',this.userD.userId);
      this.router.navigate(['/drives'])
    });
  }
}
