import axios from 'axios'


const VehicleService = {
    getAll() {
        return axios({
            url: 'https://yevana.com/odata/oVehiculo?$expand=PreciosVehiculoTemporada,FichaTecnica($expand=EquipamientoItems)',
            method: 'GET',
        })
        .then((data) => {
            var vehiculos = data.data.value;
            for (var v in vehiculos) {
                var vehiculo = vehiculos[v];
                var latest = vehiculo.PreciosVehiculoTemporada.reduce(function (l, e) {
                     return e.SetPreciosVehiculosID > l.SetPreciosVehiculosID ? e : l;
                }).SetPreciosVehiculosID;
                vehiculo.PreciosActuales = vehiculo.PreciosVehiculoTemporada.filter(function (p) { return p.SetPreciosVehiculosID == latest });
            }
            vehiculos.sort(compareVehiculos)
            return vehiculos;
        })
        .catch(function (error) {
        })
    }
}

function compareVehiculos(a, b) {
    if (!a.Disponible && b.Disponible) {
        return 1;
    }
    if (a.Disponible && !b.Disponible) {
        return -1;
    }
    if (a.Disponible && b.Disponible) {
        var precioA = a.PreciosActuales.filter(function (pt) { return pt.Temporada == "Baja" })[0].Precio;
        var precioB = a.PreciosActuales.filter(function (pt) { return pt.Temporada == "Baja" })[0].Precio;
        if (precioA > precioB) {
            return 1
        }
        else {
            return -1;
        }
    }
    return 0;
}

export default VehicleService
