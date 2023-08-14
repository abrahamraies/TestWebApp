import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { Question } from '../models/questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswers: string[] = [];
  correctAnswersCount = 0;
  seniority!: string;
  position!: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.seniority = params['seniority'];
    this.position = params['position'];
    this.loadQuestionsBySeniorityAndPosition(this.seniority, this.position);
    });
    // this.questions = this.questionService.getQuestions();
    // this.userAnswers = new Array(this.questions.length);
    // Lógica para cargar las preguntas desde archivos JSON y asignarlas a la variable "questions"

    // Generar preguntas aleatorias
    this.questions = this.shuffleArray(this.questions);
    const storedAnswers = localStorage.getItem('userAnswers');
    if (storedAnswers) {
      this.userAnswers = JSON.parse(storedAnswers);
    } else {
      // Si no hay respuestas almacenadas, inicializa el arreglo de respuestas
      this.userAnswers = new Array(this.questions.length);
    }
  }

  loadQuestionsBySeniorityAndPosition(seniority: string, position: string) {
    // Aquí puedes implementar la lógica para cargar las preguntas según el seniority y la posición elegidos
    // Por ejemplo, puedes hacer una llamada a un servicio que obtenga las preguntas de una API o una base de datos
    // y guardar las preguntas en una propiedad del componente para mostrarlas en el test
    // this.questions = myQuestionsService.getQuestionsBySeniorityAndPosition(seniority, position);
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;

    localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
    if (this.currentQuestionIndex === this.questions.length) {
      this.router.navigate(['/results']); // Redirecciona a la página de resultados cuando se responden todas las preguntas
    }
  }

  selectAnswer(answer: string): void {
    this.userAnswers[this.currentQuestionIndex] = answer;
  }

  // Función para generar un arreglo aleatorio
  private shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    // Mientras haya elementos restantes para mezclar
    while (0 !== currentIndex) {
      // Selecciona un elemento sin mezclar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Intercambia el elemento actual con el elemento aleatorio
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  calculateResults(): void {
    this.correctAnswersCount = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) {
        this.correctAnswersCount++;
      }
    }
  }

  finishTest() {
    // Aquí puedes navegar a otra página, como la página de resultados
    this.router.navigate(['/results']);
  }
}
