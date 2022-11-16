import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {first, map} from 'rxjs/operators';
import {UserServiceService} from '../services/user-service.service';

export class UsernameValidator {
  static createValidator(userService: UserServiceService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return userService
        .checkIfUsernameExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          ), first()
        );
    };
  }
}
