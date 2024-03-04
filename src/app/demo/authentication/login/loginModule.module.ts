import { NgModule } from '@angular/core';
import { loginModuleRouting } from './loginModule-routing.module';
import { CommonModule } from '@angular/common'
import  login from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestApiService } from '../../../../core/service/RestApiService.service';




@NgModule({
  declarations: [login],
  imports: [
    loginModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [RestApiService],
})
export class loginModule { }
