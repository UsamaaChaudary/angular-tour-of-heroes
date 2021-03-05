import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Usama Abbas' },
      { id: 12, name: 'Uzair Anjum' },
      { id: 13, name: 'Shabeer Ahmad' },
      { id: 14, name: 'Hamza Awan' },
      { id: 15, name: 'Hamza Hafeez' },
      { id: 16, name: 'Mansoor Afzal' },
      { id: 17, name: 'Adil Munir' },
      { id: 18, name: 'Mehran Abbas' },
      { id: 19, name: 'Faizan Abbas' },
      { id: 20, name: 'Ehtasham Abbas' }
    ];
    return {heroes};
  }
}