(() => {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatiSignar = (): string => {
        return 'Batiseñal Activada!';
    }

    console.log(typeof activateBatiSignar);

    const heroName = returnName();
})()