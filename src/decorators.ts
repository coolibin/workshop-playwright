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

@logger
class Person {
    name = 'Max';

    greet() {
        console.log(`Hi, I am ${this.name}!`);
    }
}

const max = new Person()
console.log(max)
const julia = new Person()
console.log(julia)

