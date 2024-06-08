import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        //Rutas para las paginas que muestro en el menu
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
      //Crear cada carpeta deacuerdo a las opciones que quiero tener, chat, google entro otras
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
