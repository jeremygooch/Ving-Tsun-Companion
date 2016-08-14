import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    directives: [ REACTIVE_FORM_DIRECTIVES ],
    styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this._fb.group({
            email: ['', []],
            password: ['', []]
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    }
}