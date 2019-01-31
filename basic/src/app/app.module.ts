import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
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
