import Payment from './payment';

export default class Paystack extends Payment {

    constructor(name: string, amount: number) {
        super(name, amount, "Paystack")
    }

    protected pay_request(): void {
        console.log("************************")
        console.log("Paying with Paystack")
        console.log("************************")
    }

}

