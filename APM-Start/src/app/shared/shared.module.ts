import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpaces } from './convert-to-space';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpaces
  ]
})
export class SharedModule { }
