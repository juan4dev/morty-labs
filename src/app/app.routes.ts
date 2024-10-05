import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@app/components';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [],
  },
];
