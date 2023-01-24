import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ar-pr',
  templateUrl: './logo-ar-pr.component.html',
  styleUrls: ['./logo-ar-pr.component.css']
})
export class LogoArPrComponent {

  constructor(private router:Router) { }

  login(){
    this.router.navigate(['/login'])
  }
}
