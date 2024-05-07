import { Routes } from '@angular/router';
//import LoginComponent from './login/login.component';
//import DashboardComponent from './dashboard/dashboard.component';
//import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
      path: '', redirectTo:'login' , pathMatch:'full'
  },
  {
      path:'login',
  //    component:LoginComponent
  },
  {
      path:'',
    //  component:DashboardComponent,
      children:[
          {
              path:'dashboard',
              title: 'Menu',
             // loadComponent: () => import('./dashboard/dashboard.component'),
              
          },
          {
            path: 'menu-1',
            title: 'Menu-1',
            //loadComponent: () => import('./dashboard/pages/change-detection/menu-1.component'),
          },
          {
            path: 'menu-2',
            title: 'Menu-2',
            //loadComponent: () => import('./dashboard/pages/control-flow/menu-2.component'),
          }
      ]
  }
];

/*export const routes: Routes = [

  {
    //path: 'dashboard',
    //loadComponent: () => import('./dashboard/dashboard.component'),
    path: 'login',
    loadComponent: () => import('./login/login.component'),
    children: [
    {
      path:'dashboard',
      title: 'dashboard',
      loadComponent: () => import('./dashboard/dashboard.component'),
  },
      {
        path: 'menu-1',
        title: 'Menu-1',
        loadComponent: () => import('./dashboard/pages/change-detection/menu-1.component'),
      },
      {
        path: 'menu-2',
        title: 'Menu-2',
        loadComponent: () => import('./dashboard/pages/control-flow/menu-2.component'),
      },
      {
        path: 'defer-options',
        title: 'Menu-3',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Menu-4',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'Menu-5',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'Menu-6',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-1',
        title: 'Menu-7 ',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'Menu-8',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path:'', redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }


];*/
