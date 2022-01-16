import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HiComponent, UserCardComponent, ProgressBarComponent, VersionChildComponent, VersionParentComponent], //nơi để khai báo component cho cái module này
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//@ngModel là cú pháp: typescript decorator
//meta data
