import axios from 'axios'

const ExtrasService = {
    getAll(version) {
        
        if (!version)
            version = 1;

        return axios({
            url: process.env.baseUrl 
                + '/odata/oExtra?$expand=PreciosExtra',
            method: 'GET',
        })
        .then((data) => {
            let extras = data.data.value;
            for (var e in extras) {
                var extra = extras[e];
                try {
                    if (!version || version == 1) {
                        version = extra.PreciosExtra.reduce(function (l, e) {
                            return e.SetPreciosExtrasID > l.SetPreciosExtrasID ? e : l;
                        }).SetPreciosExtrasID;
                    }
                    extra.Precio = extra.PreciosExtra.filter(function (p) { return p.SetPreciosExtrasID == version })[0].Precio;
                    extra.Calculo = extra.PreciosExtra.filter(function (p) { return p.SetPreciosExtrasID == version })[0].Calculo;
                    extra.PrecioMaximo = extra.PreciosExtra.filter(function (p) { return p.SetPreciosExtrasID == version })[0].PrecioMaximo;
                }
                catch (ex)
                {
                    console.log("Error asignando precios a extra " + extra.Nombre)
                }
                
            }
            return extras;
        })
        .catch(function (error) {
        })
    }
}


export default ExtrasService
