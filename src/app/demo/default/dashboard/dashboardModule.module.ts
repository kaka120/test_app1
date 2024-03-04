import { NgModule } from "@angular/core";
//import { SharedModule } from '@shared/shared.module';
import { dashboardModuleRouting } from "./dashboardModule-routing.module";
import { CommonModule } from "@angular/common";
import dashboard from "./dashboard.component";
/* Search panel Related section */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestApiService } from "../../../../core/service/RestApiService.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "../../../../core/interserptor/TokenInterceptorService.service";

@NgModule({
  declarations: [dashboard],
  imports: [dashboardModuleRouting, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [RestApiService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },HttpClientModule],
})
export class dashboardModule {}
