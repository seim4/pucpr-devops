import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { navigation } from '../navigation';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,

        MatButtonModule,
        MatIconModule,
        MatMenuModule
    ]
})
export class LayoutComponent implements OnInit {

    public navigation = navigation;

    constructor() { }

    ngOnInit() {
    }

}
