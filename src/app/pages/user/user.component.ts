import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getUsers() {

  }


  getName: any = localStorage.getItem('userNames');
  users: string[] = JSON.parse(this.getName);

  // x = localStorage.length;

  deleteUser(index: number) {
    // diffrent ways to remove element from array
    this.users.splice(index, 1);
  }
}
