
export default class Customer {
    _name: string;
    _email: string;

    constructor(name: string, email: string) {
        this._name = name
        this._email = email
    }


    sendMail(mail: string) {
        let mailContent = `Hello ${this._name},\n ${mail}`
        console.log(`Mail to ${this._email}`)
        console.log(mailContent)
        console.log("---------------------")
    }
}