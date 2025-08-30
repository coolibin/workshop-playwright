
interface IComponent {
    method(): string
}

class Component implements IComponent {
    method(): string {
        return 'Component method'
    }
}

class Decorator implements IComponent {
    private object: IComponent
    constructor(obj: IComponent) {
        this.object = obj
    }
    method(): string {
        return `Decorator method: (${this.object.method()})`
    }
}

// The Client

const component = new Component()
console.log(component.method())

const decorated = new Decorator(component)
console.log(decorated.method())

const decorated2 = new Decorator(decorated)
console.log(decorated2.method())
