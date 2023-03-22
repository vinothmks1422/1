import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // text = "";
  userName: string = "";
  userNameCollection: any = [];


  addUser() {
    if (this.userName !== "") {
      this.userNameCollection.push(this.userName);
      localStorage.setItem('userNames', JSON.stringify([...JSON.parse(localStorage.getItem('userNames') || '[]'), this.userName.valueOf()]));
    }
  }



}
