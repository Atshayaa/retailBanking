import { Injectable } from '@angular/core';
import { Register } from '../../models/register.module';

@Injectable()
export class userRegistrationService {
    private listUser: Register[] = [
        {
            fullName: 'Admin',
            userId: 1,
            email: 'admin@gmail.com',
            password: 'Admin@hcl'
        },
        {
            fullName: 'User1',
            userId: 2,
            email: 'user1@gmail.com',
            password: 'User1@hcl'
        },
        {
            fullName: 'User2',
            userId: 3,
            email: 'user2@gmail.com',
            password: 'User2@hcl'
        },
    ];

    getUser(): Register[] {
        return this.listUser;
    }

    save(register: Register) {
        this.listUser.push(register);
        console.log(this.getUser());
    }
}
