import IObserver from '../IObserver';

export default class PieChart implements IObserver {


    notify(amount: number): void {
        console.log("*****************************")
        console.log(`Updating Pie Chart ${amount}`)
    }

}