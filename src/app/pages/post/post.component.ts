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
  public category: any;
  public datePost: any;
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
      this.getCategory();
      this.formatDate();
    });
  }

  getCategory() {
    const id = this.post.id;
    this.service.getCategoryById(id).subscribe((data: any) => {
      this.category = data.data;
    });
  }

  formatDate() {
    const date = new Date(this.post.lastUpdateDate);
    console.log(date);
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      hour: 'numeric',
      hour12: false,
      minute: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'America/Sao_Paulo'
    });
    this.datePost = formatter.format(date);
  }


}
