import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from '../config/config.service';
import {DialogErrorComponent} from "../components/dialog/dialog.error.component";
import {MatDialog} from "@angular/material/dialog";

type Post = {
  post: string,
}

@Component({
  selector: 'feed-page',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {
  title = 'posterr';
  posts: any;
  showError: boolean = false;
  newPost: Post = {
    post: ''
  };
  @Input() showWritePost: boolean = false;

  constructor(private api: ConfigService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.api.getCall(`/v1/post`)
      .subscribe(response => {
        this.posts = response
        console.log('posts', this.posts)
      })
  }

  openDialog(data: any) {
    this.dialog.open(DialogErrorComponent, {
      data: data
    })

  }

  addNewPost() {
    this.api.postCall(`/v1/post`, this.newPost)
      .subscribe({
        next: (response) => {
          console.log(response.headers)
        },
        error: (err) => {
          console.log(err.status)
          if (err.status === 400) {
            this.openDialog({
              title: "Invalid Post",
              description: "Your post needs minimum 1 character"
            });
          } else {
            this.openDialog({
              title: "Daily Post Limit",
              description: "Unfortunately you have reached your daily post limit."
            });
          }
        }
      })

  }
}
