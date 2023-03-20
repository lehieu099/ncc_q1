import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() textContent: any;
  @Input() img: any;
  @Input() textTitle: any;
  ngOnInit(): void {
  }

}
