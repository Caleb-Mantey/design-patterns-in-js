

export default abstract class Payment {
    _name: string;
    _amount: number;
    _provider: string;

    constructor(name: string, amount: number, provider: string) {
        this._name = name
        this._amount = amount
        this._provider = provider
    }

    public request(): void {
        console.log("Save Payment Transaction Details IN DB")
        console.log(`Name: ${this._name}, Amount: Ghc ${this._amount}, Provider: ${this._provider}`)


        this.pay_request();
    }

    protected abstract pay_request(): void
}