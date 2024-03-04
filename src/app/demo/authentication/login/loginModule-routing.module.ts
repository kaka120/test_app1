import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import login from "./login.component";
const routes: Routes = [
  {
    path: "",
    component: login,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class loginModuleRouting {}
