import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'reports',component: ReportComponent
  },
  {
    path:'',redirectTo:'reports',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
