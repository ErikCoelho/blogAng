import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getPost().subscribe((data: any) => {
      this.posts = data.data;
    });
  }
}
