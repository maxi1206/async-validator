import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsernameValidator} from './validators/custom-async.validator';
import {UserServiceService} from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserServiceService) {
  }

  profileForm: FormGroup;
  showForm: boolean;

  ngOnInit(): void {
    this.showForm = true;
    this.profileForm = new FormGroup<any>({
      firstName: new FormControl('', {asyncValidators: [UsernameValidator.createValidator(this.userService)], updateOn: 'blur'}),
      lastName: new FormControl('')
    });

    this.profileForm.statusChanges.subscribe(status => {
      console.log('Form Status:' + status);
    });
    this.profileForm.get('firstName').statusChanges.subscribe(status => {
      console.log('Form Control Status:' + status);
    });
  }
}
