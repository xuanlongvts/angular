import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundNumberPipe } from './pipe-custom';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';

@NgModule({
    declarations: [PipesComponent, RoundNumberPipe],
    imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
