import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
