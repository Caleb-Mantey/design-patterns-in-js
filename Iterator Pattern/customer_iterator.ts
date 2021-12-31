
import Customer from './customer';
import IteratorInterface from './iterator_interface';

export default class CustomerIterator implements IteratorInterface<Customer>{

    _currentCustomer: Customer;
    private index: number = 0;
    private customers: Array<Customer> = [];

    constructor(currentCustomer: Customer) {
        this._currentCustomer = currentCustomer
        this.customers.push(currentCustomer)
    }

    getCurrentCustomer() {
        return this._currentCustomer
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer)
    }

    hasNext(): boolean {
        return (this.index < this.customers.length)
    }

    next(): void {
        this._currentCustomer = this.customers[++this.index]
    }

}