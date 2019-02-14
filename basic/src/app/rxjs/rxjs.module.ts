import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
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
import { TakeWhileComponent } from './take-while/take-while.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ShareComponent } from './share/share.component';

@NgModule({
    declarations: [
        RxjsComponent,
        TakeuntilComponent,
        PipeComponent,
        MergeComponent,
        StartWithComponent,
        SwitchMapComponent,
        MapComponent,
        CatchErrorComponent,
        OfComponent,
        MapToComponent,
        WithLatestFromComponent,
        TimerComponent,
        TakeWhileComponent,
        MergeMapComponent,
        TakeComponent,
        TapComponent,
        ForkJoinComponent,
        ShareComponent
    ],
    imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
