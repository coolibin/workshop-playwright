function add(a: number, b: number): number {
    return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;

type AddReturnType = ReturnValueType<AddFn>;

// let v: AddReturnType = 'abc'; // compile error!
let v: AddReturnType = add(1, 2);
console.log(typeof v);

// or using the utility type

type AddReturnType2 = ReturnType<AddFn>;
let v2: AddReturnType2 = add(1, 2);
console.log(typeof v2);
