(() => {

    const addNumbers = (a: number, b: number) =>  a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    let myFunction; //(y:number,z:number) => number;//para darle tipado

    myFunction = 10;

    myFunction = addNumbers
    console.log(myFunction (1 ,2))

    myFunction = greet
    console.log(myFunction ('Raul'))
    
    myFunction = saveTheWorld
    console.log(myFunction ())
})()