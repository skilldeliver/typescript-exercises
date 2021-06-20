
function hello(person: any){
    return "Hello, " + person;
 }

// let user = "Vladislav Mihov";
// const result = hello(user);
// console.log("Result", result);


// 1. Basic typing
function basicTyping(){
    // basic
    let isDone: boolean = false;
    let decimal: number = 1.2;
    
    let secret: unknown;
    secret = "Could be anything";
    secret = 1;

    // array
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    // tuple
    let someTuple: [string, number] = ["2", 2];

    // enums
    enum Color {
        Red,
        Green = 2,
        Blue
    }
    let c: Color = Color.Green;
    console.log(c);

    // type assertion (casting in other languages)
    let someValue: unknown = "this is a string";
    let strLength: number = (someValue as string).length;
    
    // angle bracket syntax
    let someValue2: unknown = "this is a string";
    let strLength2: number = (<string>someValue2).length;

    // let vs var
    // let is block scoped
}


basicTyping();

export {}