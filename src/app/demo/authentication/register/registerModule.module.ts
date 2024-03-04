import { NgModule } from '@angular/core';
import { registerModuleRouting } from './regsiterModule-routing.module';
import { CommonModule } from '@angular/common'
import  register from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestApiService } from '../../../../core/service/RestApiService.service';



@NgModule({
  declarations: [register],
  imports: [
    registerModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [RestApiService],
})
export class registerModule { }
