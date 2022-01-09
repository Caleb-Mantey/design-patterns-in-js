
export default class User {
    _name: string;
    _age: number;

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    setupUser() {
        console.log("*********************************************")
        console.log(`User ${this._name}, ${this._age} created `)
        console.log("*********************************************")
    }

    sendEmail() {
        console.log("*********************************************")
        console.log(`Sending mail from ${this._name}, ${this._age}`)
        console.log("*********************************************")
    }
}