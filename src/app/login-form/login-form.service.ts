import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {
    validateCreds(model) : Object {
        if (model.email == "demo@avta.io" && model.password == "demo1234") {
            return {
                code: 200,
                message: 'OK'
            };
        } else {
            return {
                code: 401,
                message: 'Unauthorized'
            };
        }
    }
}
