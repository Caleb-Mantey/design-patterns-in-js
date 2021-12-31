
import Customer from './customer';

export default interface IteratorInterface<T> {
    hasNext(): boolean;
    next(): void;
    getCurrentCustomer(): Customer;
    addCustomer(customer: Customer): void;
    _currentCustomer: T;
}