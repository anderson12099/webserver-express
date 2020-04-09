
const hbs = require("hbs");

hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
  });
  
  hbs.registerHelper("catalizar", texto => {
    let palabras = texto.splic(" ");
    palabras.forEach((palabra, indx) => {
      palabras[indx] = palabra.charAt(0).toUpperCase() + palabra.toLowerCase();
    });
  
    return palabras.join(" ");
  });