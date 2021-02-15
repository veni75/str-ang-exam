import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/service/hero.service';
import { SorterPipe } from '../../pipe/sorter.pipe';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroList: Hero[] = this.heroService.getAll();
  phrase: string = '';
  numberKey: number = 10;
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Hero());
  columnKey: string = '';

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
  }

  columnSelect(key: string): void {
    this.columnKey = key;
  }

}
