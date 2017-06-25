var fs = require('fs');
var path = require('path');

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}


var fileMunicipios = '/media/luis/data/kassandra/carto/municpios/Municipios_ETRS89_30N/Municipios_ETRS89_30N_A.json';
var dirMunicipios = path.dirname(fileMunicipios);
var output = path.join(dirMunicipios,'output01');
fs.mkdir(output);


var json = JSON.parse(fs.readFileSync(fileMunicipios,'utf8'));

var features = json.features.filter(function(feature){
    return feature.properties.Cod_Prov == "01";
})

var jsonAlava = clone(json);
jsonAlava.features = features;

fs.writeFileSync(path.join(output,'M01.geojson'),JSON.stringify(jsonAlava));





var a = 1;