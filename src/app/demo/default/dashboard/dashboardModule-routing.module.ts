import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import dashboard from "./dashboard.component";
const routes: Routes = [
  {
    path: "",
    component: dashboard,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardModuleRouting {}
