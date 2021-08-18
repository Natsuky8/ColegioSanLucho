import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/estudiante';
import { DialogoConfirmacionComponent } from 'src/app/Dialogo/confirmacion/confirmacion.component';
import { EstudiantesService } from 'src/app/estudiantes.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-estud',
  templateUrl: './estud.component.html',
  styleUrls: ['./estud.component.css']
})
export class EliminarEstudianteComponent implements OnInit {

  constructor(private estudianteService:EstudiantesService, private dialogo:MatDialog, private snackBar:MatSnackBar) { }

  ngOnInit(){
    this.obtenerEstudiantes()
  }
  eliminarEstudiante(estudiante: Estudiante) {
    this.dialogo
    .open(DialogoConfirmacionComponent, {
      data: `¿Realmente quieres eliminar a ${estudiante.nombre}?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (!confirmado) return;
      this.estudianteService
        .deleteEstudiante(estudiante)
        .subscribe(() => {
          this.obtenerEstudiantes();
          this.snackBar.open('Estudiante eliminado', undefined, {
            duration: 1500,
          });
        });
    })
  } 
  obtenerEstudiantes(){
  
   }
}

