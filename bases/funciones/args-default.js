"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'no lastname'} `;
    };
    const name = fullName('Tony', 'Starkss');
    console.log({ name });
})();
