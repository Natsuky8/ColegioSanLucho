import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from './estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  baseUrl = "http://localhost/practica"

  constructor(private http: HttpClient) { }

  getEstudiantes() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getEstudiante(id:number) {
    return this.http.get(`${this.baseUrl}/get.php?id=${id}`);
  }

  addEstudiante(estudiante: Estudiante) {
    return this.http.post(`${this.baseUrl}/post.php`, estudiante);
  }

  deleteEstudiante(estudiante: Estudiante) {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${estudiante.id}`);
  }

  updateEstudiante(estudiante: Estudiante) {
    return this.http.put(`${this.baseUrl}/update.php`, estudiante);
  }
}