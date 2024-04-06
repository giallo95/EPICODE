import { CanActivateChildFn } from '@angular/router';

export const authguardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
