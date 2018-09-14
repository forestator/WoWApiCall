import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RealmComponent } from './realm/realm.component';
import {HttpClientModule} from '@angular/common/http';
import {RealmServiceService} from './service/realm-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RealmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [RealmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
