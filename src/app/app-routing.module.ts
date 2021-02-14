import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StartComponent} from "./pages/start/start.component";
import {UserComponent} from "./pages/user/user.component";

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: 'user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



























































