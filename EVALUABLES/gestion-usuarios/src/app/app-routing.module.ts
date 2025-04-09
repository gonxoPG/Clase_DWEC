import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [

  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'edit-user/:id', component: UserDetailComponent},
  {path: 'create-user', component: UserCreateComponent},
  {path: 'user-stats', component: UserStatsComponent},
  {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
