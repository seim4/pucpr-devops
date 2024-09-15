import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService } from './core/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        RouterOutlet
    ],
})
export class AppComponent implements OnInit {

    constructor(
        private _authService: AuthService
    ) { }

    ngOnInit() {
        this._authService.initUser();
    }
    
}
