import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private listOfJournals = new BehaviorSubject([]);
  public listOfJournalsObs = this.listOfJournals.asObservable();

  constructor(public http: HttpClient) { }

  createNewContactForm(incomingData: any) {
    return this.http.post(`${baseUrl}/create-contact-form`, incomingData);
  }
}
