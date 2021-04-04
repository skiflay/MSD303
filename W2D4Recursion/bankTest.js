"use strict";

const bank = {
    transactionsDB: []
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];

let bankBalance =()=>{
    let balance=0;
    for(let money of bank.transactionsDB){
        for(let bala of money.customerTransactions){
            balance +=bala
        }
    }
    return balance;
}
console.log("expect 85",bankBalance())

  let bankBalanceId = id=>{
    let balanceId=0;
    let cusID = checkID(id)
    for(let money of cusID.customerTransactions){
        balanceId +=money
        }
    return balanceId
}
console.log("expect 10", bankBalanceId(2))

function credit(id, amount){
    let balance= bankBalanceId(id)
    balance +=amount
   console.log(balance)
}
console.log(credit(2, 1000))

function checkID(cID){
    return bank.transactionsDB.find(id=> id.customerId===cID);
  }
  //console.log(checkID(2))