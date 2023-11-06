"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
console.log('aqui');
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'no lastname'} `;
    };
    const name = fullName('Tony', 'Starkss');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'} `;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName} `;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = 10;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Raul'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignar = () => {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatiSignar);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clack Kent',
        age: 60,
        powers: ['Súper fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clack Kent',
        age: 60,
        powers: [1]
    };
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toLocaleUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('un error');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('5A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    const abc = 123;
    console.log(`I'm ${batman}`);
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map