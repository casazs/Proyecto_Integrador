import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'proxy';
  constructor(private dataSvc: DataService){}
  ngOnIni(){
      this.dataSvc.getAll().subscribe((res)=>{
        console.log('res',res);
      })
  }
}
