import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared/services/api-data.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public createForm!: FormGroup;

  constructor(public _apiService: ApiDataService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(): void{
    this.createForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      subject: [null, Validators.required],
      msg: [null, Validators.required]
    });
  }

  FormSubmit(){
    let contactfName = this.createForm.value.firstName;
    let contactlname = this.createForm.value.lastName;
    let contactEmail = this.createForm.value.email;
    let contactPhone = this.createForm.value.phoneNumber;
    let contactSubject = this.createForm.value.subject;
    let contactMsg = this.createForm.value.msg;
    let postData = {
      "firstName": contactfName,
      "lastName": contactlname,
      "email": contactEmail,
      "phoneNumber": contactPhone,
      "subject": contactSubject,
      "msg": contactMsg,
    } 
    this._apiService.createNewContactForm(postData)
    .subscribe((data: any) => {
      console.log(data);
      alert("Your messaged was successfully sent! Thank you for contacting us.");
    });
    this.createForm.reset();  
  }

}
