import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = "http://localhost:5000/posts";
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  persistPost(data) {
    return this.http.post(this.apiUrl, data);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updatePost(id, post) {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }
}
