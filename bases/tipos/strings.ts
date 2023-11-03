(() => {

    const batman: string = 'batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    const abc = 123;

    console.log(`I'm ${batman}`);

    console.log(batman.toLocaleUpperCase());

    console.log(batman[10]?.toLocaleUpperCase() || 'No está presente');

})()