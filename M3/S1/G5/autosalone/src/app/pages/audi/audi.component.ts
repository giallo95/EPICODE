import { Component } from '@angular/core';
import { iAutovettura } from '../../autovettura';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  autovettureAudi:iAutovettura[]= [];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getAutovettureByBrand('Audi')
      .then(autovetture => this.autovettureAudi = autovetture);
  }
}
