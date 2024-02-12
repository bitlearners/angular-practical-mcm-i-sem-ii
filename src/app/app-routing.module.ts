import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practical1Component } from './practical1/practical1.component';
import { Practical14Component } from './practical14/practical14.component';

const routes: Routes = [
  { path: '', component: Practical1Component },
  { path: 'practical14', component: Practical14Component },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
