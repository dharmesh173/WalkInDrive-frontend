import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showup:any=true;
  
  ngOnInit(){
    let ii = localStorage.getItem('Id');
    ii != null ? this.showup == true :  this.showup= false;
  }

  action(){
    localStorage.removeItem('Id');
    this.showup  = !this.showup;
    alert("you are log out successfully!!")
  }
}
