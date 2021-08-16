import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  subject: string;
  message: string;
  boolean;

  constructor() { }

  ngOnInit(): void {
    this.boolean == true;
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My subject is ${this.message}. My message is ${this.message}`;
    alert(allInfo); 
  }

  onSubmit(){
    this.boolean == false;

  }

}
