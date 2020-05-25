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
    this.hobbies = ['sex', 'drugs', 'rock and roll'];
  }

  users: string[] = ['ryan', 'joe', 'cameron'];
  sayHello() {
    alert('hello');
  }

  users2: string[] = ['luan', 'ivy', 'mia'];

  deleteUser(usuario) {
    for (let i = 0; i < this.users2.length; i++) {
      if ((usuario = this.users2[i])) {
        this.users2.splice(i, 1);
      }
    }
  }

  addUser(newUser) {
    this.users2.push(newUser.value);
    return false;
  }
}
