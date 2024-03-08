import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'app-one',
        loadComponent: () => import('@app-workspace/app-one/app.component').then(m => m.AppComponent)
      },
      {
        path: 'app-two',
        loadComponent: () => import('@app-workspace/app-two/app.component').then(m => m.AppComponent)
      },
];
