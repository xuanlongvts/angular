import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputOutputComponent } from './input-output.component';

const routes: Routes = [
    {
        path: '',
        component: InputOutputComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InputOutputRoutingModule {}
