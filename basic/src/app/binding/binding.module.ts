import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimeService } from '../services/time.service';
import { BindingRoutingModule } from './binding-routing.module';
import { BindingComponent } from './binding.component';

@NgModule({
    declarations: [BindingComponent],
    imports: [CommonModule, FormsModule, BindingRoutingModule],
    providers: [TimeService],
})
export class BindingModule {}
