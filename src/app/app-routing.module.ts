import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './pages/start/start.component';
import {UserComponent} from './pages/user/user.component';
import {AdminComponent} from './admin/admin.component';
import {BalanceComponent} from './pages/start/balance/balance.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'user', component: UserComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



























































