import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  display = false;
  operation = 'add';

  currentPost: Post = {
    title: '',
    body: ''
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPosts()
        .subscribe((res: any[]) => {
         this.posts = res;
      });
  }

  savePost(data) {
    if(data.valid) {
     console.log(data);
      this.postService.persistPost(data.value)
          .subscribe((res) => {
            this.posts = [res, ...this.posts];
            this.currentPost = {
              title: '',
              body: ''
            }
            this.display = false;
          },
          (err) => console.error(err));
    }
    else {
      alert('please check your Form !');
    }
  }

  toggleForm() {
    this.display = !this.display;
  }

  destroyPost(id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'To delete this post',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        
        this.postService.deletePost(id)
          .subscribe(() => {
            this.posts = this.posts.filter((post) => post.id !== id);
          })

        Swal.fire({
          title: 'Post deleted !',
          type: 'success',
          timer: 3000
        })
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      }
    })
   
  }

  editPost(post) {
    this.currentPost = post;
    this.display = true;
    this.operation = 'update';
  }

  updatePost() {

    let data = {
      title: this.currentPost.title,
      body: this.currentPost.body,
    }
    this.postService.updatePost(this.currentPost.id, data)
        .subscribe((res) => {

          this.display = false;
          this.operation = 'add';

          this.currentPost = {
            title: '',
            body: ''
          }
          
        });
  }

  log(myTitle) {
    console.log(myTitle);
  }

}
