import { CanActivate } from '@angular/router'

export class UserGuard implements CanActivate {

    canActivate(): boolean {
        return true;
    }
    
}