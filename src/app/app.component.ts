import { Component } from '@angular/core';
// import {FORM_DIRECTIVES, FORM_PROVIDERS} from '@angular/forms';
// import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ LoginFormComponent ]
})
export class AppComponent {
    title = 'Welcome to the Ving Tsun Companion!';
}
