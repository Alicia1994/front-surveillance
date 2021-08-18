import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-post',
  templateUrl: './handle-post.component.html',
  styleUrls: ['./handle-post.component.scss']
})
export class HandlePostComponent implements OnInit {

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
