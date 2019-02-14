import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCycleRoutingModule } from './angular-cycle-routing.module';
import { AngularCycleComponent } from './angular-cycle.component';

@NgModule({
    declarations: [AngularCycleComponent],
    imports: [CommonModule, AngularCycleRoutingModule],
})
export class AngularCycleModule {}
