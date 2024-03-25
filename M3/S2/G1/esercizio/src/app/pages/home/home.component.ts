import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postArr:Post[] = [];

  constructor (private postSvc:PostService){}

  ngOnInit(){
    this.postSvc.getAllPost().then(res => {
      this.postArr = res;
    })
  }


}
