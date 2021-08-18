import { Component, OnInit, NgModule } from '@angular/core';
import { Estudiante } from '../estudiante'



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
estudianteModel:Estudiante=
{
  nombre:"sbfhbfb",
  id:14813,
  materia:"mate",
  semestre1:10,
  semestre2:36
};

  constructor() { }

  ngOnInit() {
  }




  formularioEnviado(){
  
    console.log("El formulario del estudiante fue enviado ", this.estudianteModel)
    alert("Enviado");
  }
}