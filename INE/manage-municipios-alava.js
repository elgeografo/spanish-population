/**
 * Script de ejemplo para crear un geojson nuevo conteniendo solo los municipios de Álva
 */


var fs = require('fs');
var path = require('path');

/**
 *
 * Funcion genérica que clona un objeto
 *
 * @param obj - Objeto a clonar
 * @returns {*} - Objeto clonado
 */
function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

// Declaramos las variables y creamos el directorio donde volcaremos la cartografía
var fileMunicipios = '/media/luis/data/kassandra/carto/municpios/Municipios_ETRS89_30N/Municipios_ETRS89_30N_A.json';
var dirMunicipios = path.dirname(fileMunicipios);
var output = path.join(dirMunicipios,'output01');
fs.mkdir(output);

// Leémos el fichero geojson con todos los municipios
var json = JSON.parse(fs.readFileSync(fileMunicipios,'utf8'));

// filtramos las features a todas aequellas que tengan el código de provincia 01, es decir, las de Álava
var features = json.features.filter(function(feature){
    return feature.properties.Cod_Prov == "01";
})

// clonamos y sustituímos las features originales (conteniendo todos los municipios de España) con las filtradas. Conteniendo solo las de Álava.
var jsonAlava = clone(json);
jsonAlava.features = features;

// grabamos en un fichero geojson
fs.writeFileSync(path.join(output,'M01.geojson'),JSON.stringify(jsonAlava));
