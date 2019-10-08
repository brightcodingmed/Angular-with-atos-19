import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('my-like') like = 0;
  @Input('my-dislike') disLike = 0;

  @Output('updateVoteFromChildToParent') editVote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.editVote.emit({type: 1, data: this.like});
  }

  incDisLike() {
    this.disLike++;
    this.editVote.emit({type: 0, data: this.disLike });
  }

}
