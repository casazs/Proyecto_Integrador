import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ar-pr',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent {

  constructor(private router:Router) { }

  login(){
    this.router.navigate(['/login'])
  }
}
