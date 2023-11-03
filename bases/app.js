"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroPower;
    (function (HeroPower) {
        HeroPower[HeroPower["flash"] = 5] = "flash";
        HeroPower[HeroPower["superman"] = 100] = "superman";
        HeroPower[HeroPower["batman"] = 1] = "batman";
        HeroPower[HeroPower["acuaman"] = 0] = "acuaman";
    })(HeroPower || (HeroPower = {}));
    const fuerzaFlash = HeroPower.flash;
    const fuerzaSuperman = HeroPower.superman;
    const fuerzaBatman = HeroPower.batman;
    const fuerzaAcuaman = HeroPower.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
