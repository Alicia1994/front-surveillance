import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-user',
  templateUrl: './handle-user.component.html',
  styleUrls: ['./handle-user.component.scss']
})
export class HandleUserComponent implements OnInit {

  condition: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  isTrue() {
    this.condition = false;
  }
  isFalse() {
    this.condition = true;
  }
}
