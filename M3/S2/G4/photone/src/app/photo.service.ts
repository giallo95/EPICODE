import { Injectable } from '@angular/core';
import { IPhoto } from './Models/i-photo';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private photosSubject = new Subject<IPhoto[]>();

  constructor(private http: HttpClient) { }


  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.apiUrl);
  }


  getPhotosUpdates(): Observable<IPhoto[]> {
    return this.photosSubject.asObservable();
  }


  deletePhoto(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }


  private updatePhotosSubject(): void {
    this.getPhotos().subscribe(photos => {
      this.photosSubject.next(photos);
    });
  }
}
