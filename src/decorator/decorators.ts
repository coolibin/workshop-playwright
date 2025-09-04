function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator called')
    console.log(target)
    console.log(ctx)

    return class extends target {
        age = 30;

        constructor(...args: any[]) {
            super(...args)
            console.log('constructor called')
            console.log(this)
        }
    }
}

function autobind(target: (...args: any[]) => any, ctx: ClassMethodDecoratorContext) {
    console.log('autobind decorator called')
    console.log(target)
    console.log(ctx)
    ctx.addInitializer(function (this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });
}

@logger
class Person {
    name = 'Max';

    constructor() {
        // without autobind, the function reference will not work
        // bind the method to the class instance,
        // otherwise the function reference will not work
        // this.greet = this.greet.bind(this);
    }

    @autobind
    greet() {
        console.log(`Hi, I am ${this.name}!`);
    }
}

const max = new Person()
console.log(max)
const julie = new Person()
console.log(julie)

const greet = max.greet;
greet();