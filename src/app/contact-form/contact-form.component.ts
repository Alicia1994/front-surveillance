import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, {EmailJSResponseStatus, init } from 'emailjs-com';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    init("user_GvHXfuTbEi3TsRSIT0Wa6");
  }

  public sendEmail(e: Event): void {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_rj8wykc',
        'template_ugwd852',
        e.target as HTMLFormElement,
        'user_GvHXfuTbEi3TsRSIT0Wa6'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.router.navigate(['/contact-success']); 
        },
        (error) => {
        }
      );
  }
}
