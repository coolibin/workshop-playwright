

interface IProduct {
    name: string
}

class ConcreteProduct implements IProduct {
    name = ''
}

class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductA'
    }
}

class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductB'
    }
}

class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'ConcreteProductC'
    }
}

class Creator {
    createProduct(someProperty: string): IProduct {
        if (someProperty === 'A') {
            return new ConcreteProductA()
        } else if (someProperty === 'B') {
            return new ConcreteProductB()
        } else if (someProperty === 'C') {
            return new ConcreteProductC()
        } else {
            throw new Error('Invalid property')
        }
    }
}

// alternatively:

class Creator2 {
    createProduct(someProperty: string): IProduct {
        const registry: Record<string, new () => IProduct> = {
            A: ConcreteProductA,
            B: ConcreteProductB,
            C: ConcreteProductC,
        };
        const constructorMethod = registry[someProperty];
        if (!constructorMethod) throw new Error('Invalid property');
        return new constructorMethod();
    }
}

const product = new Creator2().createProduct('A')
console.log(product)