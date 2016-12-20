import { FormControl, AbstractControl } from '@angular/forms';

export class BmcValidators {

    static isNir(control: AbstractControl) {
        if (control.value.indexOf('nir') > 0) {
            return { isNir: true }  
        }
        return null;
    }
}
