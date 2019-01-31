import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child.component';
import { ViewChildDetailComponent } from './view-child-detail/view-child-detail.component';

@NgModule({
    declarations: [ViewChildComponent, ViewChildDetailComponent],
    imports: [CommonModule, ViewChildRoutingModule],
})
export class ViewChildModule {}
