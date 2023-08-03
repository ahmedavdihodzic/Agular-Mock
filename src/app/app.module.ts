import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { MockData } from './mock-data';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiDemoComponent } from './components/in-memory-api-demo/in-memory-api-demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    InMemoryApiDemoComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    CandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockData,{delay:500})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
