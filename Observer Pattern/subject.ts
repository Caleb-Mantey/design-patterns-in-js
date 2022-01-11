import IObserver from './IObserver';


export default abstract class Subject {
    _observers: Array<IObserver> = []

    addObserver(observer: IObserver) {
        this._observers.push(observer);
    }

    removeObserver(observer: IObserver) {
        this._observers = this._observers.filter(obs => observer !== obs)
    }

    notifyObservers(amount: number) {
        this._observers.forEach(observer => observer.notify(amount))
    }
}