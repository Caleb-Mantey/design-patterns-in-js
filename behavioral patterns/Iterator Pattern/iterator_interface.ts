
import Customer from './customer';

export default interface IteratorInterface<T> {
    hasNext(): boolean;
    next(): void;
    getCurrentCustomer(): T;
    addCustomer(customer: T): void;
    _currentCustomer: T;
}
