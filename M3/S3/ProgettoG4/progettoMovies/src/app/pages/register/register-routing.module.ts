import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChildFn } from '@angular/router';
import { RegisterComponent } from './register.component';
import { authguardGuard } from '../../Auth/authguard.guard';

const routes: Routes = [{ path: '', component: RegisterComponent, canActivate:[authguardGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
