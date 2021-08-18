import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/estudiante';
import { EstudiantesService } from 'src/app/estudiantes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';





@Component({
  selector: 'src/app/agregar',
  templateUrl: './estud.component.html',
  styleUrls: ['./estud.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  constructor(private estudiantesService: EstudiantesService ,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }
  estudianteModel:Estudiante={
    nombre:"",
  id:0,
  materia:"",
  semestre1:0,
  semestre2:0}

  onSubmit() {
    this.estudiantesService.addEstudiante(this.estudianteModel).subscribe(() => {
      this.snackBar.open('Estudiante guardad', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/estudiante']);
    })
  }
  

}