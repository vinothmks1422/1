import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getName: any = localStorage.getItem('userNames');

  fetchedText: any = JSON.parse(this.getName);


  // x = localStorage.length;

  deleteUser(index: number) {
    // diffrent ways to remove element from array
    this.fetchedText.splice(index, 1);
  }
}
