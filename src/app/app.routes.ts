import { Routes } from '@angular/router';
import { MainLayoutComponent } from '@core/components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'characters',
        loadComponent: () =>
          import(
            './containers/rick-and-morty/rick-and-morty-container.component'
          ).then((m) => m.RickAndMortyContainerComponent),
      },
    ],
  },
];
