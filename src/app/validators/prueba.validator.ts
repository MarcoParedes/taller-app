
import { AbstractControl } from "@angular/forms/forms";

export function PruebaValidator() {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const result = control.value > 45 || control.value < 18;
        return result ? { errorData: true } : null;
    }     
}
