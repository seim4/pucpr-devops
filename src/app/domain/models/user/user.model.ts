import { UserStatusEnum } from "../../enums/user/status.enum";

export interface UserModel {

    name: string;
    status: UserStatusEnum;

}