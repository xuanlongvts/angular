import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [MaterialComponent, FormComponent, LayoutComponent],
    imports: [CommonModule, MaterialRoutingModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MatCardModule, MatRadioModule],
})
export class MaterialModule {}
