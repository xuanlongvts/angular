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
        path: 'view-child',
        loadChildren: './view-child/view-child.module#ViewChildModule',
    },
    {
        path: 'rxjs',
        loadChildren: './rxjs/rxjs.module#RxjsModule',
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
