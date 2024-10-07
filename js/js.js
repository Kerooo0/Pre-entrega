
//cada pais necesita: superficie, n habitantes, capital, idioma/s oficiales, moneda, hora oficial, dominio de internet
var paises_sudamericanos = [
    {
        nombre: "Argentina",
        superficie: "3.761.274 km²",
        habitantes: "46.234.830",
        capital: "Ciudad Autónoma de Buenos Aires",
        idioma: "español",
        moneda: "peso",
        hora: "GMT -3h",
        dominio: ".ar"   //  fuente de informacion -> https://www.argentina.gob.ar/pais
    },

    {
        nombre: "Brasil",
        superficie: "8.515.767 km²",
        habitantes: "213.993.437",
        capital: "Brasilia",
        idioma: "portugués",
        moneda: "real",
        hora: "GMT -3h",
        dominio: ".br"
    },
    {
        nombre: "Peru",
        superficie: "1.285.215 km km²",
        habitantes: "32.625.948",
        capital: "Lima",
        idioma: "español",
        moneda: "nuevo sol",
        hora: "GMT -5",
        dominio: ".pe"
    }, //datos de: https://www.gob.pe

    {
        nombre: "Chile",
        superficie: "756.626 km²",
        habitantes: "19.493.184",
        capital: "Santiago de Chile",
        idioma: "español",
        moneda: "Peso",
        hora: "	GMT -3",
        dominio: ".cl"
    }, //datos: https://www.gob.cl/nuestro-pais/
    {
        nombre: "Paraguay",
        superficie: "406,752 km²",
        habitantes: "7.454.000",
        capital: "Asunción",
        idioma: "Guaraní y español",
        moneda: "guaraní",
        hora: "GMT -4",
        dominio: ".py"
    }, //https://www.paraguay.gov.py

    {
        nombre: "Uruguay",
        superficie: "176,215 km²",
        habitantes: "3.426.260 ",
        capital: "Montevideo",
        idioma: "español",
        moneda: "Peso",
        hora: "GMT-3",
        dominio: ".uy"
        //https://www.gub.uy
    },
    {
        nombre: "Venezuela",
        superficie: "916,445 km²",
        habitantes: "29.533.797",
        capital: "Caracas",
        idioma: "español",
        moneda: "Bolívar",
        hora: "GMT-5:30",
        dominio: ".ve"
    }, //https://mppp.gob.ve

    {
        nombre: "Colombia",
        superficie: "1.141.748 km²",
        habitantes: "51.609.000 ",
        capital: "Bogotá",
        idioma: "Español",
        moneda: "Peso",
        hora: "GMT -5",
        dominio: ".co"
    }, //https://mppp.gob.ve

    {
        nombre: "Ecuador",
        superficie: "276.841 km²",
        habitantes: "17.640.000",
        capital: "Quito",
        idioma: "español",
        moneda: "dólar estadounidense",
        hora: "GMT -5",
        dominio: ".ec"
    }, //https://www.gob.ec

    {
        nombre: "Bolivia",
        superficie: "1.098.581 km²",
        habitantes: "12.086.000",
        capital: "Sucre (oficial), La Paz (sede de gobierno)",
        idioma: "español, quechua, aymara",
        moneda: "boliviano",
        hora: "GMT -4",
        dominio: ".bo"
    }, //https://presidencia.gob.bo

    {
        nombre: "Guyana",
        superficie: "214.969 km²",
        habitantes: "790.000",
        capital: "Georgetown",
        idioma: "inglés",
        moneda: "dólar guyanés",
        hora: "GMT -4",
        dominio: ".gy"
    }, //https://op.gov.gy

    {
        nombre: "Surinam",
        superficie: "163.821 km²",
        habitantes: "591.000",
        capital: "Paramaribo",
        idioma: "neerlandés",
        moneda: "dólar surinamés",
        hora: "GMT -3",
        dominio: ".sr"
    }, //https://gov.sr

    {
        nombre: "Trinidad y Tobago",
        superficie: "5.128 km²",
        habitantes: "1.400.000",
        capital: "Puerto España",
        idioma: "inglés",
        moneda: "dólar de Trinidad y Tobago",
        hora: "GMT -4",
        dominio: ".tt"
    } //https://idaoffice.org/es/posts/10-interesting-facts-about-trinidad-and-tobago/
];

function mostrarPais() {
    var paisForm =document.getElementById("pais").value.trim();
    var lista =document.getElementById("paises-lista");
    lista.innerHTML = "";   //limpio la lista :D
    

var paisEncontrado =paises_sudamericanos.find(function(pais){
    return pais.nombre == paisForm;
});

if (paisEncontrado) {
    var li =document.createElement("li");
    li.innerHTML = "<h2>" + paisEncontrado.nombre + "</h2><ul><li>Superficie: " + paisEncontrado.superficie + "</li><li>Habitantes: " + paisEncontrado.habitantes + "</li><li>Capital: " + paisEncontrado.capital + "</li><li>Idioma: " + paisEncontrado.idioma + "</li><li>Moneda: " + paisEncontrado.moneda + "</li><li>Hora: " + paisEncontrado.hora + "</li><li>Dominio: " + paisEncontrado.dominio + "</li></ul>";
    lista.appendChild(li);
} else {
   var li =document.createElement("li");
    li.innerHTML = "<h2> Pais no encontrado </h2>";
    lista.appendChild(li); 
}







}

