import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { TasklistComponent } from './pages/tasklist/tasklist.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PhoneBookComponent } from './pages/phonebook/phonebook.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch:'full'},
  { path: 'main', component: MainComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'phonebook', component: PhoneBookComponent },
  { path: '**', redirectTo:'/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
