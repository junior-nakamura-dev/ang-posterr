import {Component, OnInit} from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'feed-page',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  title = 'posterr';
  posts: any;

  constructor(private api: ConfigService) {
  }

  ngOnInit() {
    this.api.getCall('/v1/post')
      .subscribe(response => {
        this.posts = response
        console.log('posts', this.posts)
      })
  }


}
