import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getName: any = localStorage.getItem('userNames')?.split(' ')

  // getNameColl : Array<string> = [];

  // y = this.getNameColl.push(this.getName);
  

  x = localStorage.length;

  deleteUser(index: number) {
    // diffrent ways to remove element from array
    this.getName.splice(index, 1);
    console.log(this.getName);
    
  }
}
