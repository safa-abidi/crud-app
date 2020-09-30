import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  peopleList = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (resultat) => {
        this.peopleList = resultat;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(person) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);
  }
}
