import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs.component';

import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { PipeComponent } from './pipe/pipe.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MergeComponent } from './merge/merge.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MapComponent } from './map/map.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { OfComponent } from './of/of.component';

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent,
    },
    {
        path: 'pipe',
        component: PipeComponent,
    },
    {
        path: 'takeuntil',
        component: TakeuntilComponent,
    },
    {
        path: 'subscribe',
        component: SubscribeComponent,
    },
    {
        path: 'merge',
        component: MergeComponent,
    },
    {
        path: 'startwith',
        component: StartWithComponent,
    },
    {
        path: 'switchmap',
        component: SwitchMapComponent,
    },
    {
        path: 'map',
        component: MapComponent,
    },
    {
        path: 'catcherror',
        component: CatchErrorComponent,
    },
    {
        path: 'of',
        component: OfComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RxjsRoutingModule {}
