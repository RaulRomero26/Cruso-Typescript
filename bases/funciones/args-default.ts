(() => {

    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string => {

        return `${ firstName} ${lastName ||'no lastname'} `
    }

    const name = fullName ('Tony', 'Starkss');

    console.log({name})

})()