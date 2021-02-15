import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { HeroesComponent } from './common/heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
