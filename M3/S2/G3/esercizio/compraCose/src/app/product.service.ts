import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { IProduct } from './Models/i-product';

type responseJSON = {
  products: IProduct[],
  total: number,
  skip: number,
  limit: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  favSubject = new Subject<IProduct[]>();
  cartSubject = new Subject<IProduct[]>();

  $favorites = this.favSubject.asObservable()
  $cart = this.cartSubject.asObservable()

  constructor(private http: HttpClient) { }

  getProducts(){

    return this.http.get<responseJSON>('https://dummyjson.com/products')
    .pipe(map( r => r.products))
  }

  addToFavorites(product:IProduct[]){
    this.favSubject.next(product)
  }
}
