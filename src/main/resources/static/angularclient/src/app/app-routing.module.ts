import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {AppComponent} from './app.component';

const routes: Routes = [
//   {
//     path: 'client-list/client-list', component: ClientListComponent
// //   },
//   {
//     path: '**', component: AppComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
