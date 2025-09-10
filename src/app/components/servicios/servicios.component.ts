import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'Diseño Arquitectónico',
      descripcion: 'Planeamos y diseñamos proyectos adaptados al entorno con innovación y sostenibilidad.',
      icono: 'assets/icons/construccion.png'
    },
    {
      titulo: 'Construcción de Obras',
      descripcion: 'Ejecutamos proyectos civiles con calidad, seguridad y eficiencia.',
      icono: 'assets/icons/remodelacion.png'
    },
    {
      titulo: 'Consultoría Técnica',
      descripcion: 'Asesoría integral en planificación y ejecución de proyectos de ingeniería.',
      icono: 'assets/icons/agua.png'
    }
  ];
}
