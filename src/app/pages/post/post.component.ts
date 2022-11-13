import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: any;
  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goToPost();
  }

  goToPost() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getPostById(id).subscribe((data: any) => {
      this.post = data.data;
      console.log(data.data);
    });
  }

}
