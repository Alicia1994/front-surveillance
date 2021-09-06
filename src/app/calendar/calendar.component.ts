import { Component, forwardRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  calendarOptions: CalendarOptions = {
    headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
    locale: 'fr',
    plugins: [ googleCalendarPlugin ],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    googleCalendarApiKey: 'AIzaSyDZ_xoUZK8Jy18XxvbZdrzuPhbRWY5shJU',
  events: {
    googleCalendarId: 'asso.surveillance@gmail.com'
  }
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}