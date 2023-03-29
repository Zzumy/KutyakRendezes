import { objektumLista } from "./adat.js";
import { megjelenitObj, rendezObjSzoveg } from "./rendezes.js";

$(document).ready(function () {
    megjelenitObj(objektumLista);
    $("#nev").on("keyup", function () {
        rendezObjSzoveg(objektumLista);
    });
    $("#fajta").on("keyup", function () {
        rendezObjSzoveg(objektumLista);
    });
    $("#kor").on("keyup", function () {
        rendezObjSzoveg(objektumLista);
    });
})
