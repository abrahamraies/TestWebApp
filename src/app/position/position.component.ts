import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {

  constructor(private location: Location,private route: ActivatedRoute, private router: Router) {}

  selectPosition(position: string) {
    // Leer el parámetro seniority de la URL
    const selectedSeniority = this.route.snapshot.queryParams['seniority'];

    // Almacenar la posición seleccionada en una variable
    const selectedPosition = position;

    // Navegar al componente Test con los parámetros seniority y position en la URL
    this.router.navigate(['/test'], { queryParams: { seniority: selectedSeniority, position: selectedPosition } });
  }

  goBack(): void {
    this.location.back();
  }

}
