import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {
  public posts: any;
  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goToPostByCategory();
  }

  goToPostByCategory() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getPostByCategory(id).subscribe((data: any) => {
      this.posts = data.data;
      console.log(data.data);
    });
  }

}
