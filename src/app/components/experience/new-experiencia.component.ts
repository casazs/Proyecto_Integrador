import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
nombreE: string='';
descripcionE: string='';

constructor (private sExperiencia: SExperienceService, private router: Router){}

onCreate():void{
  const expe =new Experiencia(this.nombreE, this.descripcionE);
  this.sExperiencia.save(expe).subscribe(data => {alert("Experience saved.");
      this.router.navigate(['']); 
  }, err =>{alert("Error");
  this.router.navigate(['']);}
    )
  }
}
