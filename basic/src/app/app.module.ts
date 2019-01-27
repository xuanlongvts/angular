import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputOutputRoutingModule } from './input-output/input-output-routing.module';
import { InputOutputComponent } from './input-output/input-output.component';

@NgModule({
    declarations: [AppComponent, InputOutputComponent],
    imports: [BrowserModule, AppRoutingModule, InputOutputRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
    imports: Định nghĩa sự phụ thuộc (Dependency) của module này, module phụ thuộc sẽ được load trước rồi module này mới load.
    declarations: Định nghĩa tất cả các component sẽ được dùng trong module này. Nếu chưa định nghĩa thì các component trong module sẽ không thể gọi nhau vì không tìm thấy nhao.
    bootstrap: Nói cho module biết component nào dùng để khởi động
    providers: import services
*/
