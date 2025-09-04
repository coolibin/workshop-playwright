export {}

interface IProtoType {
    clone(): this
}

class MyClass implements IProtoType {
    field: number[]
    constructor(field: number[]) {
        this.field = field
    }

    clone() {
        return Object.assign({}, this) // shallow copy
    }
}

// The Client

const object1 = new MyClass([1,2,3,4])
console.log(`object1: ${JSON.stringify(object1)}`)

const object2 = object1.clone()
console.log(`object2: ${JSON.stringify(object2)}`)

object2.field[1] = 101
console.log(`object2: ${JSON.stringify(object2)}`)
// note object1 is changed
console.log(`object1: ${JSON.stringify(object1)}`)
