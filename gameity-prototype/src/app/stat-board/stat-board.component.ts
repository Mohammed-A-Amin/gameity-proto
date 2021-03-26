import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/services/api-data.service';

@Component({
  selector: 'app-stat-board',
  templateUrl: './stat-board.component.html',
  styleUrls: ['./stat-board.component.scss']
})
export class StatBoardComponent implements OnInit {
  public userList = [];
  
  constructor(public _apiService: ApiDataService) { }

  ngOnInit() {
    this.listenForUserData();
    // subscribe
    this._apiService.listOfUsersObs
    .subscribe((data) =>{
      this.userList = data;
    })
  }
  listenForUserData() {
    this._apiService.getAllUsers();
  }

}
