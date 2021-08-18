import { Component, OnInit, NgModule } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/estudiantes.service';
import {Estudiante} from 'src/app/estudiante';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-estud',
  templateUrl: './estud.component.html',
  styleUrls: ['./estud.component.css']
})

    
export class EditarEstudiantesComponent implements OnInit {
   
  estudiantes:Estudiante ={
  nombre:"",
  id:0,
  materia:"",
  semestre1:0,
  semestre2:0};

  constructor(private route: ActivatedRoute,
    private router: Router, private estudiantesService: EstudiantesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let response= this.route.snapshot.paramMap.get("id");
    let id=parseInt(response)
    this.estudiantesService.getEstudiante(id).subscribe((Estudiante:any)=>{
      this.estudiantes.nombre=Estudiante.nombre;
      this.estudiantes.id=Estudiante.id;
      this.estudiantes.materia=Estudiante.materia;
      this.estudiantes.semestre1=Estudiante.semestre1;
      this.estudiantes.semestre2=Estudiante.semestre2;

      
    });
    
  }
  volver() {
    this.router.navigate(['/estudiantes']);
  }

  onSubmit() {
    this.estudiantesService.updateEstudiante(this.estudiantes).subscribe(() => {
      this.snackBar.open('Estudiante actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
