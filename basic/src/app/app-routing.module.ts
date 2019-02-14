import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'binding',
        loadChildren: './binding/binding.module#BindingModule',
    },
    {
        path: 'input-output',
        loadChildren: './input-output/input-output.module#InputOutputModule',
    },
    {
        path: 'pipe',
        loadChildren: './pipe/pipes.module#PipesModule',
    },
    {
        path: 'view-child',
        loadChildren: './view-child/view-child.module#ViewChildModule',
    },
    {
        path: 'service-http',
        loadChildren: './service-http/service-http.module#ServiceHttpModule',
    },
    {
        path: 'rxjs',
        loadChildren: './rxjs/rxjs.module#RxjsModule',
    },
    {
        path: 'angular-cycle',
        loadChildren: './angular-cycle/angular-cycle.module#AngularCycleModule',
    },
    {
        path: 'material',
        loadChildren: './material/material.module#MaterialModule',
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
