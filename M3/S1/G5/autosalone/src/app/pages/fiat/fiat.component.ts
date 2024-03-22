import { Component } from '@angular/core';
import { AutoService } from '../../auto.service';
import { iAutovettura } from '../../autovettura';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  autovettureFiat:iAutovettura[]= [];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getAutovettureByBrand('Fiat')
      .then(autovetture => this.autovettureFiat = autovetture);
  }
}
