import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.posts = data;
    });
  }

  posts = [];
}
