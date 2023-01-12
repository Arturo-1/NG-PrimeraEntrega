import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos =[
    { 
      id: 1,
      nombre: "Desarrollo Angular",
      area: "Programacion y desarrollo",
      descripcion: "Angular es el framework de desarrollo en JavaScript creado y soportado por Google. Descubre cómo escuchar y responder a eventos generados por el usuario. ",
      codigo: 243267,
      tutor: "Javier Molina",
      fecha_Inicial: "05-02-2023",
      img: "../assets/img/cursos/angular-14.jpg",
      precio: 2500
    }, 
    { 
      id: 2,
      nombre: "Cibersiguridad",
      area: "Seguridad Informatica",
      descripcion: "Comprender la importancia de los riesgos y amenazas informáticas en la actualidad, identificar las principales vulnerabilidades en las redes y los sistemas informáticos",
      codigo: 246987,
      tutor: "Carlos Aceves",
      fecha_Inicial: "08-02-2023",
      img: "../assets/img/cursos/cyber-security-article.jpg",
      precio: 1900
    }, 
    { 
      id: 3,
      nombre: "Programacion PLC",
      area: "Ingenieria Industrial",
      descripcion: " En este curso de PLC aprenderás cómo automatizar un proceso industrial mediante la programación de un PLC de la marca Delta. ",
      codigo: 145824,
      tutor: "Jonathan Velazquez",
      fecha_Inicial: "31-01-2023",
      img: "../assets/img/cursos/plc.jpg",
      precio: 2800
    }, 
    { 
      id: 4,
      nombre: "Robotica y Mecatronica",
      area: "Ingenieria Mecatronica",
      descripcion: "Este curso está diseñado para que cualquier estudiante con conocimientos básicos de electrónica pueda iniciarse en la programación de sistemas embebidos usando Arduino. ",
      codigo: 267845,
      tutor: "Maria Acevedo",
      fecha_Inicial: "01-02-2023",
      img: "../assets/img/cursos/robotica.jpg",
      precio: 5200
    }, 
    { 
      id: 5,
      nombre: "Derecho Pericial",
      area: "Derecho",
      descripcion: "En este curso aprenderás derecho de propiedad, a partir de mecanismos jurídicos, para identificar los factores que influyen en la adquisición de una propiedad y cómo se debe realizar el debido proceso.",
      codigo: 145824,
      tutor: "Alejandra Martinez",
      fecha_Inicial: "12-02-2023",
      img: "../assets/img/cursos/derecho.jpg",
      precio: 2450
    }, 

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
