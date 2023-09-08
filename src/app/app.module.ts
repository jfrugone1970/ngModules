import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormsModule } from './modules/auth-forms/auth-forms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PreloadSelectedModulesList } from './preloading-Strategy/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-Strategy/network-gware-preloading-strategy';
import { OnDemandRealoadingStrategy } from './preloading-Strategy/on-demand-preloading-strategies';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Auth Form Module
    AuthFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [
    PreloadSelectedModulesList,
    NetworkAwarePreloadStrategy,
    OnDemandRealoadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
