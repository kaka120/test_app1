import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  // {
  //   id: 'dashboard',
  //   title: 'Overview',
  //   type: 'group',
  //   icon: 'icon-navigation'
  // },
  {
    id: 'elements',
    //title: 'UI Components',
    type: 'group',
    //icon: 'icon-navigation',
    children: [
      {
        id: 'dasboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'ti ti-dashboard'
      },
      {
        id: 'user',
        title: 'User Management',
        type: 'item',
        classes: 'nav-item',
        url: '/user',
        icon: 'ti ti-users'
      },
      {
        id: 'breadcrumb',
        title: 'Settings',
        type: 'item',
        classes: 'nav-item',
        url: '/other/sample-page',
        icon: 'ti ti-settings'
      },
      // {
      //   id: 'spinner',
      //   title: 'spinner',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/spinner',
      //   icon: 'ti ti-loader'
      // },
      // {
      //   id: 'color',
      //   title: 'Colors',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/color',
      //   icon: 'ti ti-brush'
      // },
      // {
      //   id: 'tabler',
      //   title: 'Tabler',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: 'https://tabler-icons.io/',
      //   icon: 'ti ti-leaf',
      //   target: true,
      //   external: true
      // }
    ]
  }
  // {
  //   id: 'authentication',
  //   //title: 'Authentication',
  //   type: 'group',
  //   //icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'login',
  //       title: 'Login',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/login',
  //       icon: 'ti ti-login',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'register',
  //       title: 'Register',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/register',
  //       icon: 'ti ti-user-plus',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
