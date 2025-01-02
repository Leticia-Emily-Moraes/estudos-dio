//Dio Banking

import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

//name, accountNumber
//depositar, sacar

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Lele", 10);
console.log(peopleAccount);
peopleAccount.deposit();

// peopleAccount.deposit();
// console.log(peopleAccount.getName());

// peopleAccount.setName("Leticia");

// console.log(peopleAccount.getName());

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(peopleAccount);
