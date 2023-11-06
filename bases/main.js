"use strict";
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toLocaleUpperCase());
})();
(() => {
    const getName = () => {
        console.log('viejo get name');
    };
})();
//# sourceMappingURL=main.js.map