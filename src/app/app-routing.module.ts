import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './bill-manager/list/list.component';
import { BillDetailComponent } from './bill-manager/bill-detail/bill-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { ArchiveComponent } from './archive/archive.component';
import { CustomBillsComponent } from './custom-bills/custom-bills.component';

import { AuthGuard } from './auth/auth.guard';
import { HistoryComponent } from './history/history.component';
import {TrashComponent} from './trash/trash.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: '', component: HomeComponent, outlet: 'childComponent' },
      { path: 'upload', component: UploadComponent, outlet: 'childComponent' },
      { path: 'archive', component: ArchiveComponent, outlet: 'childComponent' },
      { path: 'trash', component: TrashComponent, outlet: 'childComponent' },
      { path: 'bill-details', component: BillDetailComponent, outlet: 'childComponent' },
      { path: 'customBills', component: CustomBillsComponent, outlet: 'childComponent' }

    ]
  },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
