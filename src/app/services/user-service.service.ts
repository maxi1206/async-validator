import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private existingUsernames = ['Batman', 'Superman', 'Joker', 'Luthor', 'a'];

  checkIfUsernameExists(value: string): Observable<boolean> {
    console.log('Validator Runs');
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }
}
