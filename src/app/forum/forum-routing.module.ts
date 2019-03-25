import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumComponent} from './forum.component';

const routes: Routes = [
  {path: 'forum', component: ForumComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
