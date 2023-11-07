(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    const {poder, vision} = avengers;

    //console.log(poder.toFixed(2),vision.toLocaleUpperCase())

    const avengersArr: [string,boolean,number] = ['Cap. América',true,150.15];

    const [capitan,ironman, seriaUnNumero] = avengersArr;
    // console.log({ironman,capitan, seriaUnNumero});
})()