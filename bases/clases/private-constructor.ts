(() => {

   class Apocalipsis {

        static instance: Apocalipsis;

        constructor( public name: string){

        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el unico')
            }

            return Apocalipsis.instance;
        }

   } 

      const apocalipsis1 = Apocalipsis.callApocalipsis()
      const apocalipsis2 = Apocalipsis.callApocalipsis()
      const apocalipsis3 = Apocalipsis.callApocalipsis()
//    const apocalipsis1 = new Apocalipsis('Soy apocalipsis1... unico')
//    const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... unico')
//    const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... unico')

     console.log(apocalipsis1,apocalipsis2,apocalipsis3)

})()