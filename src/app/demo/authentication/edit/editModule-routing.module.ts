import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import editComponent from "./edit.component";
const routes: Routes = [
  {
    path: "",
    component: editComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class editModuleRouting {}
