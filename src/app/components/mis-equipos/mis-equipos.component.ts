import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-mis-equipos',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, NgForOf],
  templateUrl: './mis-equipos.component.html',
  styleUrl: './mis-equipos.component.css'
})
export class MisEquiposComponent implements OnInit {
  equipos: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.equipos = [
      {
        id: 1,
        nombre: 'Selección femenina',
        participantes: 15,
        horario: 'L - M: 18:00-20:00',
        ultimo_entreno: new Date('2023-01-24')
      },
      {
        id: 2,
        nombre: 'Selección masculina',
        participantes: 19,
        horario: 'J - V: 18:00-20:00',
        ultimo_entreno: new Date('2023-01-27')
      },
      {
        id: 3,
        nombre: 'Administrativos',
        participantes: 17,
        horario: 'S: 16:00-20:00',
        ultimo_entreno: new Date('2023-01-22')
      }
    ];
  }
}

/**
export class MisEquiposComponent implements OnInit {
  equipos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Definir las cabecera, si es necesario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token' // Si su Api usa un token de autenticación
    });

    // Realiza la solicitud HTTP GET para obtener los datos
    this.http.get<any[]>('https://tuapiurl.com/equipos', { headers }) // Reemplaza con la URL de tu API real
      .subscribe(
        (data) => {
          this.equipos = data; // Asigna los datos a la variable equipos
        },
        (error) => {
          console.error('Error al obtener equipos:', error);
        }
      );
  }
}
 */