import { Component } from '@angular/core';
import { iAutovettura } from '../../autovettura';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  autovettureFord:iAutovettura[]= [];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getAutovettureByBrand('Ford')
      .then(autovetture => this.autovettureFord = autovetture);
  }
}
