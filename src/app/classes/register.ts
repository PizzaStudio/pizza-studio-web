import {Gender} from 'src/app/classes/enums/gender-enum';
import {Role} from 'src/app/classes/enums/role';

export class Register {
firstName: string | undefined;
lastName: string | undefined;
mobileNumber: number | undefined;
emailId: string | undefined;
password: string | undefined;
dateOfBirth: Date | undefined;
gender: typeof Gender | undefined;
roles: Role[] | undefined

constructor()
{
    this.firstName = undefined
    this.lastName = undefined
    this.mobileNumber = undefined;
    this.emailId = undefined;
    this.password =undefined;
    this.dateOfBirth = undefined;
    this.gender = undefined;
}
}
