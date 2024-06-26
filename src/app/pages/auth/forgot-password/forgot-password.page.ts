import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  firebaseSvc = inject(FirebaseService);
  utilsScv = inject(UtilsService)

  ngOnInit() {
  }

  async submit() {
    if(this.form.valid){

      const loading = await this.utilsScv.loading();
      await loading.present();

      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then (res => {

        this.utilsScv.presentToast({
          message: 'Correo enviado con éxito',
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'mail-outline'
        });

        this.utilsScv.routerLink('/auth');
        this.form.reset();

      }).catch(error =>{

        console.log(error);

        this.utilsScv.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circule-outline'
        })

      }).finally(()=>{
        loading.dismiss();
      })

    } 
  }


}
