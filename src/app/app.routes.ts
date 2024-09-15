import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },

    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./modules/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./modules/about/about.component').then(c => c.AboutComponent)
            },
        ]
    }
];
