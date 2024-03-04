import { NgModule } from "@angular/core";
//import { SharedModule } from '@shared/shared.module';
import { userModuleRouting } from "./userModule-routing.module";
import { CommonModule } from "@angular/common";
/* Search panel Related section */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestApiService } from "../../../../core/service/RestApiService.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import user from "./user.component";
import { TokenInterceptorService } from "../../../../core/interserptor/TokenInterceptorService.service";

@NgModule({
  declarations: [user],
  imports: [userModuleRouting, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [RestApiService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },HttpClientModule],
})
export class dashboardModule {}
