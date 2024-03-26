import { Oggetto } from './Models/oggetto';
import { Post } from './Models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PostService{

  getAllPost():Promise<Post[]>{
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:Oggetto)=> res.posts)
  }

  getActivePost():Promise<Post[]>{
    return this.getAllPost()
    .then(res => res.filter(p => p.active))
  }

  getInactivePost():Promise<Post[]>{
    return this.getAllPost()
    .then(res => res.filter(p => !p.active))
  }


}

