import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Ryan Ray';
  age: number;
  address: {
    street: string;
    city: string;
    telephone: number;
  };
  hobbies: string[];

  constructor() {
    this.age = 35;
    this.address = {
      street: 'Cuba 2121',
      city: 'Buenos Aires',
      telephone: 239283,
    };
    hobbies: ['sex', 'drugs', 'rock and roll'];
  }
}
