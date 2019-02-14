import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialComponent } from './material.component';

import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: MaterialComponent,
    },
    {
        path: 'layout',
        component: LayoutComponent,
    },
    {
        path: 'form',
        component: FormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaterialRoutingModule {}
