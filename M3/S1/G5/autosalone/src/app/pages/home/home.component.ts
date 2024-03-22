import { Component } from '@angular/core';
import { iAutovettura } from '../../autovettura';
import { AutoService } from '../../auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  randomAutovetture:iAutovettura[] = [];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getRandomAvailableAutovetture().then(autovetture => {
      this.randomAutovetture = autovetture;
    });
  }
}
