import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  ngOnInit() {
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
