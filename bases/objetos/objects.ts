(() => {

    let flash: {name: string, age?: number, powers: string[], getName?: ()=>string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clack Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log(flash)

})()