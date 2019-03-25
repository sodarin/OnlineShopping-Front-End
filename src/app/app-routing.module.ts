import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'user', redirectTo: '/user', pathMatch: 'full'},
  {path: 'recycle', redirectTo: '/recycle', pathMatch: 'full'},
  {path: 'shopping/computer', redirectTo: '/shopping/computer', pathMatch: 'full'},
  {path: 'shopping/mouse', redirectTo: '/shopping/mouse', pathMatch: 'full'},
  {path: 'shopping/headphones', redirectTo: '/shopping/headphones', pathMatch: 'full'},
  {path: 'shopping/keyboard', redirectTo: '/shopping/keyboard', pathMatch: 'full'},
  {path: 'shopping/cellphone', redirectTo: '/shopping/cellphone', pathMatch: 'full'},
  {path: 'shopping/cart', redirectTo: '/shopping/cart', pathMatch: 'full'},
  {path: 'forum', redirectTo: '/forum', pathMatch: 'full'},
  {path: 'order', redirectTo: '/order', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
