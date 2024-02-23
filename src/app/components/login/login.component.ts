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
       alert(this.dataa.tt);
       localStorage.setItem('Id', this.dataa.tt);
       this.router.navigate(['/drives'])
    });
  }
}
