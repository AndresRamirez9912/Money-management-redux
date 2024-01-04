import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class ComponentsModule {}
