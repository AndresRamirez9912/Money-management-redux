import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { IncomeExpenseModule } from './incomeExpense/income-expense.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,

    AuthModule,
    DashboardModule,
    SharedModule,
    IncomeExpenseModule,
  ],
})
export class ComponentsModule {}
