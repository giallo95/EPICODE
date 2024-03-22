import { Injectable } from '@angular/core';
import { iAutovettura } from './autovettura';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  getAllAutovetture(): Promise<iAutovettura[]> {
    return fetch('../assets/db.json')
      .then(res => res.json())

  }

  getAvailableAutovetture(): Promise<iAutovettura[]> {
    return this.getAllAutovetture()
      .then(res => res.filter(av => av.available));
  }

  getInavailableAutovetture(): Promise<iAutovettura[]> {
    return this.getAllAutovetture()
      .then(res => res.filter(av => !av.available));
  }

  getAutovettureByBrand(brand: string): Promise<iAutovettura[]> {
    return this.getAllAutovetture()
      .then(res => res.filter(av => av.brand === brand));
  }

  async getRandomAvailableAutovetture(): Promise<iAutovettura[]> {

    const availableAutovetture = await this.getAvailableAutovetture();


    if (availableAutovetture.length <= 2) {
      return availableAutovetture;
    } else {

      const randomAutovetture: iAutovettura[] = [];
      while (randomAutovetture.length < 2) {
        const randomIndex = Math.floor(Math.random() * availableAutovetture.length);
        randomAutovetture.push(availableAutovetture[randomIndex]);
      }
      return randomAutovetture;
    }
  }
}

