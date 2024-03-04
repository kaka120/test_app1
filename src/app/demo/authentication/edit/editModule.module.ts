import { NgModule } from '@angular/core';
import { editModuleRouting } from './editModule-routing.module';
import { CommonModule } from '@angular/common'
import  editComponent from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestApiService } from '../../../../core/service/RestApiService.service';



@NgModule({
  declarations: [editComponent],
  imports: [
    editModuleRouting,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [RestApiService],
})
export class editModule { }
