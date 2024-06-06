import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toasCtrl = inject(ToastController);
  router = inject(Router);

  //=====Loagind=====
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }


  //=====Toast====
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toasCtrl.create(opts);
    toast.present();
  }

  //=====Enruta a cualquier pagina disponible=====
  routerLink(url: string) {
    return this.router.navigateByUrl(url)
  }

  //=====Guarda un elemento en Localstorage=====
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  //=====Obtener un elemeto de LocalStorage=====
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }
}
