import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "mcore-md";

@Component({
  selector: 'my-lib',
  templateUrl: './lib.component.html',
  styleUrls: ['./lib.component.css']
})
export class LibComponent {
  posts: any;
  mcore: Post;

  constructor(private http: HttpClient) {
    this.mcore = new Post(this.http);

    this.mcore.getPosts('https://jsonplaceholder.typicode.com/posts')
      .subscribe((dataPosts: any) => {
        this.posts = dataPosts;
      })
  }
}
