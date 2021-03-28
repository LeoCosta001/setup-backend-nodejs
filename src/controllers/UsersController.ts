import { User } from '@models/Users';

export class UsersController {
    get newUser() {
        return new User();
    }
}
