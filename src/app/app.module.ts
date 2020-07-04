import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './bill-manager/list/list.component';
import { BillDetailComponent } from './bill-manager/bill-detail/bill-detail.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { DatePickerComponent } from './header/date-picker/date-picker.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SideNavService} from './services/side-nav.service';
import { VendorComponent } from './vendor/vendor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import {FilterPipe} from "./history/filter.pipe";
import { UploadComponent } from './upload/upload.component';
import { ArchiveComponent } from './archive/archive.component';
import { CustomBillsComponent } from './custom-bills/custom-bills.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    BillDetailComponent,
    LoginComponent,
    UserMenuComponent,
    DatePickerComponent,
    DashboardComponent,
    VendorComponent,
    NotFoundComponent,
    HistoryComponent,
    FilterPipe,
    UploadComponent,
    ArchiveComponent,
    CustomBillsComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
