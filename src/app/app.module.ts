import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppPaletteComponent } from './app-palette/app-palette.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    AppPaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
