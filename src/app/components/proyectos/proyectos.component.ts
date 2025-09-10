import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto/proyecto.service';
import { Proyecto } from '../../models/proyecto.model';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  carouselOptions = {
    items: 3,
    dots: true,
    nav: true,
    loop: true,
    margin: 10,
    autoHeight: false
  };
  constructor(private serviceProyecto: ProyectoService) { }

  ngOnInit(): void {
    this.serviceProyecto.getProyectos().subscribe(proyectos => {
      console.log('Proyectos obtenidos:', proyectos);
      this.proyectos = proyectos
    });
  }
  // proyectos = [
  //   {
  //     titulo: 'Edificio Empresarial',
  //     descripcion: 'Construcción de un complejo empresarial moderno y sostenible.',
  //     imagen: 'assets/img/proyecto1.jpg'
  //   },
  //   {
  //     titulo: 'Vivienda Multifamiliar',
  //     descripcion: 'Diseño y ejecución de viviendas adaptadas al entorno.',
  //     imagen: 'assets/img/proyecto2.jpg'
  //   },
  //   {
  //     titulo: 'Centro Cultural',
  //     descripcion: 'Espacio cultural con arquitectura innovadora.',
  //     imagen: 'assets/img/proyecto3.jpg'
  //   }
  // ];
  verMas(proyecto: any) {
    alert('Más detalles de: ' + proyecto.titulo);
  }
}
