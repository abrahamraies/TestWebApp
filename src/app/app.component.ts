import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  encodeMessage(message: string): string {
    message = "Hola, quisiera colaborar con la página de entrevistas IT!"
    return encodeURIComponent(message);
  }

}
