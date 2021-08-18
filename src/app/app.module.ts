import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AcercaDeComponent, } from './app.component';
import { AgregarEstudianteComponent } from './agregarEstudiante/estud/estud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogoConfirmacionComponent } from './Dialogo/confirmacion/confirmacion.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import {MatIconModule} from "@angular/material/icon";
import { ListarEstudiantesComponent } from './mostrarEstudiante/estud/estud.component'
import { EditarEstudiantesComponent } from './editarEstudiante/estud/estud.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AcercaDeComponent,
    AgregarEstudianteComponent,
    DialogoConfirmacionComponent,
    FormularioComponent,
    ListarEstudiantesComponent,
    EditarEstudiantesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule, 
    MatToolbarModule,
    MatDialogModule, 
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule
    
  
  
  ],
  providers: [],
  bootstrap: [AcercaDeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
