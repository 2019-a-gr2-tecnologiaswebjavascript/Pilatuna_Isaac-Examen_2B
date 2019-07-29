import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCrearSOPage } from './modal-crear-so/modal-crear-so.page';
import { ModalCrearSOPageModule } from './modal-crear-so/modal-crear-so.module';
import { ModalCrearAPPPage } from './modal-crear-app/modal-crear-app.page';
import { ModalCrearAPPPageModule } from './modal-crear-app/modal-crear-app.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ModalCrearAPPPage,ModalCrearSOPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ModalCrearAPPPageModule,ModalCrearSOPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
