import { Routes } from '@angular/router';
import { StatisticsComponent } from '../incomeExpense/statistics/statistics.component';
import { IncomeExpenseComponent } from '../incomeExpense/income-expense.component';
import { DetailComponent } from '../incomeExpense/detail/detail.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
  },
  {
    path: 'income-expense',
    component: IncomeExpenseComponent,
  },
  {
    path: 'detail',
    component: DetailComponent,
  },
  {
    path: 'incomeExpense',
    component: IncomeExpenseComponent,
  },
];
