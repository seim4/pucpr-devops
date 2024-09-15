import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { UserModel } from '../../domain/models/user/user.model';
import { UserStatusEnum } from '../../domain/enums/user/status.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private _user = new BehaviorSubject<UserModel>(null);

    private get localStorageUser() : UserModel {
        const item = localStorage.getItem('user');

        if (item) {
            return JSON.parse(item);
        }
        
        return null;
    }

    private set _localStorageUser(user : UserModel) {
        localStorage.setItem('user', JSON.stringify(user));
        this._user.next(user);
    }
    
    
    constructor() { }

    public get user$(): Observable<UserModel> {
        return this._user.asObservable();
    }

    // Public methods
    public initUser(): void {

        if (this.localStorageUser != null) {
            this._user.next(this.localStorageUser);
        }
        else {

            const user: UserModel = {
                name: 'Gabriel Seima',
                status: UserStatusEnum.ACTIVE
            };

            this._localStorageUser = user;
            this._user.next(user);
        }

    }

    public setStatus(status: UserStatusEnum): void {
        const user = this._user.getValue();
        
        user.status = status;

        this._localStorageUser = user;
    }

}
