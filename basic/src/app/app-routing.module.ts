import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
