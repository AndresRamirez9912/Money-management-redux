import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpenseComponent } from './income-expense.component';
import { DetailComponent } from './detail/detail.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [IncomeExpenseComponent, DetailComponent, StatisticsComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class IncomeExpenseModule {}
