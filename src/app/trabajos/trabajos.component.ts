import { Component, OnInit } from '@angular/core';
import { NuevoService } from '../servicios/nuevo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  trabajoso: any = [];
  estudioso: any = [];


  constructor(private datos:NuevoService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.trabajoso = data.trabajos;
      this.estudioso = data.estudios;

    })
  }

}
