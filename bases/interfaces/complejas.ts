(() => {

    interface Adress{
        id: number;
        zip: string;
        city: string;
    }
    
    interface Client {
        name: string;
        age?: number;
        address: Adress;
        getFullAdress(id:number):void;
    }

    const client:Client = {
        name: 'Ferando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdress(id: number){
            return this.address.city
        }
    }

})()