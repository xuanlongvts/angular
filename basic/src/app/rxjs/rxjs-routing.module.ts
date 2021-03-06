import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs.component';

import { TakeuntilComponent } from './takeuntil/takeuntil.component';
import { PipeComponent } from './pipe/pipe.component';
import { MergeComponent } from './merge/merge.component';
import { StartWithComponent } from './start-with/start-with.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MapComponent } from './map/map.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { OfComponent } from './of/of.component';
import { MapToComponent } from './map-to/map-to.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { TimerComponent } from './timer/timer.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ShareComponent } from './share/share.component';

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
        path: 'with-latest-from',
        component: WithLatestFromComponent,
    },
    {
        path: 'takeuntil',
        component: TakeuntilComponent,
    },
    {
        path: 'mapto',
        component: MapToComponent,
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
    {
        path: 'timer',
        component: TimerComponent,
    },
    {
        path: 'tap',
        component: TapComponent,
    },
    {
        path: 'take',
        component: TakeComponent,
    },
    {
        path: 'takewhile',
        component: TakeWhileComponent,
    },
    {
        path: 'mergemap',
        component: MergeMapComponent,
    },
    {
        path: 'share',
        component: ShareComponent,
    },
    {
        path: 'forkjoin',
        component: ForkJoinComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RxjsRoutingModule {}
