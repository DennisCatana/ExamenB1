import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

//FIREBASE
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot({mode: 'md'}), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"examenb1-93c95","appId":"1:1066547309725:web:fb0ce519b25d3b00993874","storageBucket":"examenb1-93c95.appspot.com","apiKey":"AIzaSyBhwk7AzjBrTm8Fysvy89A-B7arEOj9rfg","authDomain":"examenb1-93c95.firebaseapp.com","messagingSenderId":"1066547309725","measurementId":"G-7KED9BDZ7N"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  bootstrap: [AppComponent],
})
export class AppModule {}
