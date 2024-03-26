import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  postArr:Post[] = [];

  constructor (private postSvc:PostService){}

  ngOnInit(){
    this.postSvc.getInactivePost().then(res => {
      this.postArr = res;
    })
  }


}
