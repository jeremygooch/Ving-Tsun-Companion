import { Component, OnInit } from '@angular/core';
import { Validators, NgClass } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    directives: [ REACTIVE_FORM_DIRECTIVES, NgClass ],
    styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    public loginForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this._fb.group({
            email: ['', [<any>Validators.required]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(6)]]
        });
    }

    subcribeToFormChanges() {
        const loginFormStatusChanges$ = this.loginForm.statusChanges;
        const loginFormValueChanges$ = this.loginForm.valueChanges;

        loginFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        loginFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    doLogin(event, model:this, isValid:boolean) {
        event.preventDefault();

        this.submitted = true;
        if (isValid) {
            console.log('going to validate creds');
        }
    }
}
