import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [DataService]
})

export class CategoriesComponent implements OnInit {
  public categories: any;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((data: any) => {
      this.categories = data.data;
      console.log(data.data);
    });
  }

  getPost(id: any) {
    this.service.getPostByCategory(id).subscribe((data: any) => {
      console.log(data.data);
    });
  }
}
