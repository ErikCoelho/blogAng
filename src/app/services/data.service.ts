import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "http://localhost:5275"

  constructor(
    private http: HttpClient
  ) {
  }


  public composeHeaders(token: string) {
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers;
    }
    else {
      return null;
    }
  }

  public getCategories() {
    return this.http.get(`${this.baseUrl}/v1/categories`);

  }

  public getPost() {
    return this.http.get(`${this.baseUrl}/v1/posts`);
  }

  public getPostById(id: any) {
    return this.http.get(`${this.baseUrl}/v1/post/${id}`);
  }

  public getPostByCategory(id: any) {
    return this.http.get(`${this.baseUrl}/v1/posts/category/${id}`);
  }

  public getPostByUser(token: any) {
    return this.http.get(`${this.baseUrl}/v1/posts/user`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    });
  }



  // public post(data: any, token: string) {
  //   return this.http.post(`${this.baseUrl}/v1/posts`, data, { headers: HttpHeaders.arguments(this.composeHeaders(token)) });
  // }
}