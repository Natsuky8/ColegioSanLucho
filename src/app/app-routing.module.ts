import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { AgregarEstudianteComponent } from 'src/app/agregarEstudiante/estud/estud.component';
import { ListarEstudiantesComponent } from 'src/app/mostrarEstudiante/estud/estud.component';
import { EditarEstudiantesComponent } from 'src/app/editarEstudiante/estud/estud.component';
import { AcercaDeComponent } from 'src/app/app.component';
import { DeclarationListEmitMode } from '@angular/compiler';



const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "estudiantes", component: ListarEstudiantesComponent },
  { path: "estudiantes/agregar", component: AgregarEstudianteComponent },
  { path: "estudiantes/editar/:id", component: EditarEstudiantesComponent },
  { path: "", redirectTo: "/estudiantes", pathMatch: "full" },
  { path: "**", redirectTo: "/estudiantes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
