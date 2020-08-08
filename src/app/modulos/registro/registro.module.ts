import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';



@NgModule({
  declarations: [RegistroComponent, SingupComponent, LoginComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
