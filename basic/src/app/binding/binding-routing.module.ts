import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingComponent } from './binding.component';

const routes: Routes = [
    {
        path: '',
        component: BindingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BindingRoutingModule {}
