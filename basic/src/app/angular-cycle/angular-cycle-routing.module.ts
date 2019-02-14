import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularCycleComponent } from './angular-cycle.component';

const routes: Routes = [
    {
        path: '',
        component: AngularCycleComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AngularCycleRoutingModule {}
