import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/i-product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        (response) => {
          this.products = Object.values(response);
          console.log('Dati ricevuti:', this.products);
        },
        (error) => {
          console.error('Errore nella richiesta GET:', error);
        }
      );
  }

}

