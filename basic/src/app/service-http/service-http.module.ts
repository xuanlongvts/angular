import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ShareService } from './share-service';
import { ServiceHttpRoutingModule } from './service-http-routing.module';
import { ServiceHttpComponent } from './service-http.component';

@NgModule({
    declarations: [ServiceHttpComponent],
    imports: [HttpClientModule, CommonModule, ServiceHttpRoutingModule],
    providers: [ShareService],
})
export class ServiceHttpModule {}
