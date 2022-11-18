import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  public postForm!: FormGroup;
  public categories: any;
  constructor(
    private router: Router,
    private service: DataService,
    private afAuth: AngularFireAuth,

  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(''),
      imageUrl: new FormControl('', [Validators.required]),
      title: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      body: new FormControl('', Validators.compose([
        Validators.minLength(30),
        Validators.required
      ])),
      category: new FormControl('', [Validators.required])
    })
    this.getCategories();
  }

  get imageUrl() {
    return this.postForm.get('imageUrl')!;
  }

  get title() {
    return this.postForm.get('title')!;
  }

  get body() {
    return this.postForm.get('body')!;
  }

  get category() {
    return this.postForm.get('category')!;
  }

  getCategories() {
    this.service.getCategories().subscribe((data: any) => {
      this.categories = data.data;
    });
  }

  submit() {
    if (this.postForm.invalid) {
      return;
    }

    this.afAuth.idToken.subscribe(token => {
      this.service.post(this.postForm.value, token)
        .subscribe(res => {
          this.router.navigateByUrl("/");
        });
    })
  }

}
