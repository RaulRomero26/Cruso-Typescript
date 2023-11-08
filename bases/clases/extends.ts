(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log('Constructor avenger llamado')
        }


        protected getFullName() {
            return `${ this.name } ${ this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name,realName);
            console.log('Constructor xmen llamado')
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name:string){
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log('desde xmen')
        }
    }

    // const wolverine = new Xmen('Wolverine','Logan',true)

    // wolverine.fullName = 'Raul';
    // // wolverine.getFullNameDesdeXmen();
    // console.log(wolverine.fullName)
}) ()