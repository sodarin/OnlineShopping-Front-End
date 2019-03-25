import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecycleComponent} from './recycle.component';

const routes: Routes = [
  {path: 'recycle', component: RecycleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecycleRoutingModule { }
