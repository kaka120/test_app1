import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import register from "./register.component";
const routes: Routes = [
  {
    path: "",
    component: register,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class registerModuleRouting {}
