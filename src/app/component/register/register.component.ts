import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  options: AnimationOptions = {
    path: '/assets/auth.json',
  };
}
