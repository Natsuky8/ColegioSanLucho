import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EstudiantesService } from "src/app/estudiantes.service"
import { Estudiante } from "src/app/estudiante"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "src/app/Dialogo/confirmacion/confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-estud',
  templateUrl: './estud.component.html',
  styleUrls: ['./estud.component.css'],
  
})

export class ListarEstudiantesComponent implements OnInit {
  
   estudiantes: Estudiante = {
    nombre:"Maggie Perez", 
    id:454431365,
    materia:"Arte",
    semestre1:15,
    semestre2:50
   };



   ELEMENT_DATA: Array<{ idInscrito:any}> = [];
  displayedColumns: string[] = ['nombre', 'id', 'materia', 'semestre1', 'semestre2'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor(private estudiantesService: EstudiantesService, private dialogo: MatDialog, private snackBar: MatSnackBar) {}
  ngOnInit(){
    this.obtenerEstudiantes();
  }

  eliminarEstudiante(estudiante: Estudiante) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${estudiante.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.estudiantesService
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
   this.estudiantesService.getEstudiantes()
      .subscribe((Estudiante:any) =>this.dataSource=Estudiante);
  }


}





