// angular import
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Project import
import { AdminComponent } from "./theme/layouts/admin/admin.component";
import { GuestComponent } from "./theme/layouts/guest/guest.component";
import { AuthGuard } from '../core/authGuard/auth.guard';
const routes: Routes = [
  // {
  //   path: "admin",
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: "",
  //       redirectTo: "dashboard",
  //       pathMatch: "full",
  //     },
  //     {
  //       path: "dashboard",
  //       loadComponent: () =>
  //         import("./demo/default/dashboard/dashboard.component"),
  //         // loadChildren: () =>
  //         //  import("./demo/authentication/login/loginModule.module").then((m) => m.loginModule),
  //     },
  //     {
  //       path: "user",
  //       loadComponent: () => import("./demo/default/user/user.component"),
  //     },
  //     {
  //       path: "typography",
  //       loadComponent: () =>
  //         import("./demo/ui-component/typography/typography.component"),
  //     },
  //     {
  //       path: "card",
  //       loadComponent: () => import("./demo/component/card/card.component"),
  //     },
  //     {
  //       path: "breadcrumb",
  //       loadComponent: () =>
  //         import("./demo/component/breadcrumb/breadcrumb.component"),
  //     },
  //     {
  //       path: "spinner",
  //       loadComponent: () =>
  //         import("./demo/component/spinner/spinner.component"),
  //     },
  //     {
  //       path: "color",
  //       loadComponent: () =>
  //         import("./demo/ui-component/ui-color/ui-color.component"),
  //     },
  //     {
  //       path: "sample-page",
  //       loadComponent: () =>
  //         import("./demo/other/sample-page/sample-page.component"),
  //     },
  //   ],
  // },
  {
    path: "login",
    component: GuestComponent,
    loadChildren: () =>
      import("./demo/authentication/login/loginModule.module").then(
        (m) => m.loginModule
      ),
  },
  {
    path: "register",
    component: GuestComponent,
    loadChildren: () =>
      import("./demo/authentication/register/registerModule.module").then(
        (m) => m.registerModule
      ),
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: AdminComponent,
    loadChildren: () =>
      import("./demo/default/dashboard/dashboardModule.module").then(
        (m) => m.dashboardModule
      ),
  },
  {
    path: "user",
    canActivate: [AuthGuard],
    component: AdminComponent,
    loadChildren: () =>
      import("./demo/default/user/userModule.module").then(
        (m) => m.dashboardModule
      ),
  },
  {
    path: "edit",
    canActivate: [AuthGuard],
    component: AdminComponent,
    loadChildren: () =>
      import("./demo/authentication/edit/editModule.module").then(
        (m) => m.editModule
      ),
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
