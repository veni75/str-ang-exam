import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      id: 1,
      name: 'János',
      superPower: 11,
      address: 'Budapest',
    },
    {
      id: 2,
      name: 'Péter',
      superPower: 33,
      address: 'Székesfehérvár',
    },
    {
      id: 3,
      name: 'Zoltán',
      superPower: 18,
      address: 'Miskolc',
    },
    {
      id: 4,
      name: 'István',
      superPower: 54,
      address: 'Szeged',
    },
    {
      id: 5,
      name: 'Ferenc',
      superPower: 35,
      address: 'Pécs',
    },
  ];

  constructor() { }

getAll():Hero[]{
  return this.list;
}

  /* getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.list);
  } */
}
