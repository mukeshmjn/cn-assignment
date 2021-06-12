import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPageComponent } from './components/events-page/events-page.component';

const routes: Routes = [
  {path:'',redirectTo:'events',pathMatch: 'full'},
  {path:'events',component:EventsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
