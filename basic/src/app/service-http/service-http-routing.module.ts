import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceHttpComponent } from './service-http.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceHttpComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceHttpRoutingModule {}
