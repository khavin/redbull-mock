import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { RedbullLogoComponent } from './redbull-logo/redbull-logo.component';
import { PageComponent } from './page/page.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CarouselListItemComponent } from './carousel-list-item/carousel-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    RedbullLogoComponent,
    PageComponent,
    ImageCarouselComponent,
    CarouselListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
