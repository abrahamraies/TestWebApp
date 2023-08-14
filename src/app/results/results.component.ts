import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../models/questions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  questions: Question[] = [];
  userAnswers: string[] = [];
  correctAnswersCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lógica para cargar las preguntas desde archivos JSON y asignarlas a la variable "questions"

    // Recupera las respuestas del usuario del almacenamiento local
    const storedAnswers = localStorage.getItem('userAnswers');
    if (storedAnswers) {
      this.userAnswers = JSON.parse(storedAnswers);
    }

    // Validar las respuestas
    this.calculateCorrectAnswers();
  }

  goBackToTest(): void {
    this.router.navigate(['/test']); // Regresa a la página del test
  }

  private calculateCorrectAnswers(): void {
    this.correctAnswersCount = 0;

    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) {
        this.correctAnswersCount++;
      }
    }
  }
}
