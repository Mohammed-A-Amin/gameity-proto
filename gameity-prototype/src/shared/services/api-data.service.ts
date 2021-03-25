import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private listOfUsers = new BehaviorSubject([]);
  public listOfUsersObs = this.listOfUsers.asObservable();

  constructor(public http: HttpClient) { }

  createNewContactForm(incomingData: any) {
    return this.http.post(`${baseUrl}/create-contact-form`, incomingData);
  }

  addOneUser(incomingData: any) {
    return this.http.post(`${baseUrl}/add-one-user`, incomingData);
  }

  addManyUsers(incomingData: any) {
    return this.http.post(`${baseUrl}/add-many-users`, incomingData);
  }

  pullAllUsers(){
    return this.http.get(`${baseUrl}/get-all-users`)
  }
  
  getAllUsers() {
    this.pullAllUsers().subscribe((data: any) => {
      this.listOfUsers.next(data);
    }, (err) => {
      console.log(err);
    })
  }
  
}
