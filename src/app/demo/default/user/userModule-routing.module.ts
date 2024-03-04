import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import user from "./user.component";
const routes: Routes = [
  {
    path: "",
    component: user,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userModuleRouting {}
