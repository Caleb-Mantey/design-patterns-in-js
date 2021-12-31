import Payment from './payment';

export default class Hubtel extends Payment {

    constructor(name: string, amount: number) {
        super(name, amount, "Hubtel")
    }

    protected pay_request(): void {
        console.log("************************")
        console.log("Paying with Hubtel")
        console.log("************************")
    }

}

