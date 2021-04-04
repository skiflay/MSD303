"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/

const bank = {
    transactionsDB: []
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};
bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};
bank.debit = function (id, amount) {
    /* make sure current balance is > amount */
//IMPLEMENT THIS
const balance =this.getBalance(id);
if(amount>balance)
balance.balance -=amount
this.saveTransaction(id, amount)
};

bank.credit = function (id, amount) {
    const balance = this.getBalance(id);
    balance.balance += amount;
    this.saveTransaction(id, amount);
}

bank.getBalance = function (id) {
//IMPLEMENT THIS
const customer = this.checkId(id)
const cusBalance = this.getBalance(id)
if(customer ===id)
 return cusBalance;
}
/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function (id) {
//IMPLEMENT THIS
const customer = this.checkId(id);
const balance = customer.cusTrans.reduce((sum, item)=>sum + item, 0)
return balance;
};

console.log("total balance should be 85: ", bank.bankBalance());
bank.credit(1, 20);
bank.debit(1, 1000);
console.log("total should now be 105: ", bank.bankBalance());

console.log(bankBalance(bank))



//=====================
// const bank = {
//     transactionDB: [],
// };
 
// bank.transactionDB = [
//     { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
//     { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
//     { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
// ];
 
// bank.checkId = function (id) {
//     const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
//     return foundCustmr;
// };
 
// bank.getBalance = function (id) {
//     const customer = this.checkId(id);
//     const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
//     return balance
// }
 
// bank.saveTransaction = function (id, amount) {
//     const customer = this.checkId(id);
//     customer.custTrans.push(amount);
// }
 
// bank.debit = function (id, amount) {
//     let balance = this.getBalance(id);
//     if (amount < 0) {
//         console.log("Invalid amount. Please enter positive amount !");
//     } else if (amount > balance) {
//         console.log("Insufficient balance. Please try again !");
//     } else {
//         amount = amount * -1;
//         balance += amount;
//         this.saveTransaction(id, amount);
//     }
//     return balance;
// }
 
// bank.credit = function (id, amount) {
//     let balance = this.getBalance(id);
//     if (amount < 0) {
//         console.log("Invalid amount. Please enter positive amount !");
//     } else {
//         balance += amount;
//         this.saveTransaction(id, amount);
//     }
//     return balance;
// }
 
// bank.totalBalance = function(){
//     const custArr = this.transactionDB;
//     let sum = 0;
//     for(const customer of custArr){
//         const id = customer.custID;
//         const custBalance = this.getBalance(id);
//         sum += custBalance;
//     }
//     return sum;
// }