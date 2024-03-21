import { Component } from '@angular/core';
import { Post } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esercizio';

  postArr:Post[] = []

  ngOnInit() {
    fetch('../assets/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        return response.json();
      })
      .then((data: { posts: Post[] }) => {
        this.postArr = data.posts;
        console.log(this.postArr);
      })
      .catch(error => {
        console.error('Errore nel recupero dei post:', error);
      });
  }
}
