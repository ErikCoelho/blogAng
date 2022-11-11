import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit {
  public posts: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getPost().subscribe((data: any) => {
      this.posts = data.data;
      console.log(data.data);
    });
  }
}


