import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  @Input("resort")
  public resort: Resort;
  
  constructor() { }

  ngOnInit() {
  }

}
