import IObserver from '../IObserver';

export default class BarChart implements IObserver {

    notify(amount: number): void {
        console.log("*****************************")
        console.log(`Updating Bar Chart ${amount}`)
    }

}