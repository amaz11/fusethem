import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

const MateriaComponents = [
  MatButtonModule,
  MatSlideToggleModule,
  MatTabsModule
]

@NgModule({
  imports: [
    MateriaComponents
  ],
  exports:[MateriaComponents]
})
export class MaterialModule { }
