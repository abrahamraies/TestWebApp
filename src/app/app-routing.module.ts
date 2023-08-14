import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeniorityComponent } from './seniority/seniority.component';
import { PositionComponent } from './position/position.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seniority', component: SeniorityComponent },
  { path: 'position', component: PositionComponent },
  { path: 'test', component: TestComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '' } // Redireccionar a la página principal si la URL es incorrecta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
