import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'John Carter';
  age: number = 28;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });
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
    newUser.value('');
    newUser.focus();
    return false;
  }

  posts = [];
}
