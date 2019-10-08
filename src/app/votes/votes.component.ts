import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('my-like') like = 0;
  @Input('my-dislike') disLike = 0;

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
  }

  incDisLike() {
    this.disLike++;
  }

}
