import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'posterr';
  page = 'feed'
  showWritePost: boolean = false;

  changePage(newPage: string) {
    this.page = newPage;
  }

  showWritePostComponent() {
    this.showWritePost = !this.showWritePost;
  }

}
