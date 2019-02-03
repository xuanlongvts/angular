import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
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

@NgModule({
    declarations: [RxjsComponent, TakeuntilComponent, PipeComponent, SubscribeComponent, MergeComponent, StartWithComponent, SwitchMapComponent, MapComponent, CatchErrorComponent, OfComponent],
    imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
