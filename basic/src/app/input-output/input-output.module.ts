import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputOutputRoutingModule } from './input-output-routing.module';
import { InputOutputComponent } from './input-output.component';
import { InputOutputChildComponent } from './input-output-child/input-output-child.component';

@NgModule({
    declarations: [InputOutputComponent, InputOutputChildComponent],
    imports: [CommonModule, InputOutputRoutingModule],
})
export class InputOutputModule {}
