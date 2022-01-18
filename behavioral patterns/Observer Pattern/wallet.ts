import Subject from './subject';


export default class Wallet extends Subject {
    _amount: number = 0;

    deposit(amount: number) {
        this._amount += amount
        this.notifyObservers(amount)
    }

    withdraw(amount: number) {
        if (amount > this._amount) return console.log("Sorry can't withdraw this amount.You don't have enough cash")

        this._amount -= amount
        this.notifyObservers(amount)
    }
}