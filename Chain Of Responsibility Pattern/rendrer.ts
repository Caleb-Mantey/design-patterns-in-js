

export default abstract class Rendrer {
    _next: Rendrer | undefined;

    constructor(next: Rendrer | undefined) {
        this._next = next
    }

    hasNext() {
        return this._next !== null
    }

    doRendering() {
        this.render()

        if (this.hasNext())
            this._next?.doRendering();
    }

    abstract render(): void

}