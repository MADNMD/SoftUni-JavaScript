class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        const findCustomer = this.allCustomers.find(client => client.personalId === customer.personalId);

        if (findCustomer === undefined) {
            this.allCustomers.push(customer);
        } else {
            throw new Error(`${findCustomer.firstName} ${findCustomer.lastName} is already our customer!`);
        }
        return customer;
    }
    depositMoney(personalId, amount) {

        const findCustomerId = this.allCustomers.find(client => client.personalId === personalId);

        if (findCustomerId === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {

            if (!findCustomerId.hasOwnProperty('totalMoney')) {
                findCustomerId.totalMoney = 0;
                findCustomerId.transactions = [];
            }
            findCustomerId.totalMoney += amount;
            findCustomerId.transactions.push(`${findCustomerId.firstName} ${findCustomerId.lastName} made deposit of ${amount}$!`);
        }
        return `${findCustomerId.totalMoney}$`;
    }
    withdrawMoney(personalId, amount) {

        const findCustomerId = this.allCustomers.find(client => client.personalId === personalId);

        if (findCustomerId === undefined) {
            throw new Error('We have no customer with this ID!');
        } else {
            if (amount > findCustomerId.totalMoney) {
                throw new Error(`${findCustomerId.firstName} ${findCustomerId.lastName} does not have enough money to withdraw that amount!`);
            } else {
                findCustomerId.totalMoney -= amount;
                findCustomerId.transactions.push(`${findCustomerId.firstName} ${findCustomerId.lastName} withdrew ${amount}$!`);
            }
        }
        return `${findCustomerId.totalMoney}$`;
    }
    customerInfo(personalId) {

        const findCustomerId = this.allCustomers.find(client => client.personalId === personalId);

        if (findCustomerId === undefined) {
            throw new Error('We have no customer with this ID!');
        }
        
        return `Bank name: ${this._bankName}
Customer name: ${findCustomerId.firstName} ${findCustomerId.lastName}
Customer ID: ${findCustomerId.personalId}
Total Money: ${findCustomerId.totalMoney}$
Transactions:
${findCustomerId.transactions
                .reverse()
                .map((element, index, arr) => `${arr.length - index}. ${element}`)
                .join('\n')}`
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

// Corresponding output
// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 }
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!