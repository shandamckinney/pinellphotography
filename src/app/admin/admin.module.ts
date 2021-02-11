import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminEditComponent, AdminNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
