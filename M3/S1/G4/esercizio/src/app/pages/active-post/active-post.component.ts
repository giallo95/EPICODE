import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  postArr:Post[] = [];

  constructor (private postSvc:PostService){}

  ngOnInit(){
   this.postArr = this.postSvc.getActivePost()

  }


}
