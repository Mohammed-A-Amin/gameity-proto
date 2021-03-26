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

  // Helps display the User/Rank List
  pullUsers() {
    // this function will return the getmovies endpoint from the baseUrl which is imported above (which is our server)
    return this.http.get(`${baseUrl}/get-all-users`);
  }
  getAllUsers() {
    // we are saying to subscribe(to set) any of the data inside the pullMovies(), 
    // which actaully calls for the data in our express server - which calls for data to the studio ghibli api
    this.pullUsers().subscribe((data: any) => {
      console.log(data);
      // Observable
      // since it is an observable we use next instead of push
      this.listOfUsers.next(data);
    }, (err) => {
      console.log(err);
    })
  }
  
}
