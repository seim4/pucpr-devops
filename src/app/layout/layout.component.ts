import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, DatePipe } from '@angular/common';

import { navigation } from '../navigation';
import { AuthService } from '../core/auth/auth.service';
import { UserStatusEnum } from '../domain/enums/user/status.enum';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,

        DatePipe
    ]
})
export class LayoutComponent implements OnInit {

    public today = new Date();

    public navigation = navigation;

    public user$ = this._authService.user$;
    public UserStatusEnum = UserStatusEnum;

    constructor(
        private _authService: AuthService,
    ) { }

    ngOnInit() {
    }

    public setStatus(status: UserStatusEnum) {
        this._authService.setStatus(status);
    }

}
