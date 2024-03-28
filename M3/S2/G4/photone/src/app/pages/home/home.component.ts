import { Component } from '@angular/core';
import { IPhoto } from '../../Models/i-photo';
import { PhotoService } from '../../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  photos: IPhoto[] = [];
  totalLikes = 0;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos.map(photo => ({...photo, liked: false}));
      this.calculateTotalLikes();
    });
  }

  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe(() => {
      this.photos = this.photos.filter(photo => photo.id !== id);
      this.calculateTotalLikes();
    });
  }

  likePhoto(photo: IPhoto): void {
    photo.liked = !photo.liked;
    this.calculateTotalLikes();
  }


  calculateTotalLikes(): void {
    this.totalLikes = this.photos.reduce((total, photo) => total + (photo.liked ? 1 : 0), 0);
  }
}
