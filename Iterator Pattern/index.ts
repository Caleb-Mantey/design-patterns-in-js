
import Customer from './customer';
import CustomerIterator from './customer_iterator';
import IteratorInterface from './iterator_interface';


const customer1: Customer = new Customer("Kofi", "kofi@g.com")
const customer2: Customer = new Customer("Yaw", "yaw@g.com")
const customer3: Customer = new Customer("Kwame", "kwame@g.com")

const customerIterator: IteratorInterface<Customer> = new CustomerIterator(customer1)

customerIterator.addCustomer(customer2)
customerIterator.addCustomer(customer3)

while (customerIterator.hasNext()) {
    customerIterator.getCurrentCustomer()?.sendMail("Welcome to the team. Hope you enjoy your stay with us");
    customerIterator.next();
}

