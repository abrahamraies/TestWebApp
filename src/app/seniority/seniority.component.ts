import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seniority',
  templateUrl: './seniority.component.html',
  styleUrls: ['./seniority.component.css']
})
export class SeniorityComponent {

  constructor(private location: Location, private router: Router) {}

  selectSeniority(seniority: string) {
    // Almacenar el nivel de seniority seleccionado en una variable
    const selectedSeniority = seniority;

    // Navegar al componente Position con el parámetro seniority en la URL
    this.router.navigate(['/position'], { queryParams: { seniority: selectedSeniority } });
  }

  goBack(): void {
    this.location.back();
  }

}
