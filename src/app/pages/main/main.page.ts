import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  pages = [
    { title: 'Hoja de Vida', url: '/main/home', icon: 'document-outline' },
  ]

  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);
  currentPath: string = '';

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event?.url) this.currentPath = event.url;

    })
  }

    //=====Obtener los datos del usuario=====
    user(): User{
      return this.utilSvc.getFromLocalStorage('user');
    }

  //=====Cerrar sesion=====
  signOut() {
    this.firebaseSvc.signOut();
  }

}
