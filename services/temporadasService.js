import axios from 'axios'

const TemporadasService = {

    temporadas: null,

    getAll() {
        if (!this.temporadas) {
            return axios({
                url: process.env.baseUrl + '/odata/oTemporada',
                method: 'GET',
            })
            .then((data) => {
                this.temporadas = data.data.value;
                return this.temporadas;
            })
            .catch(function (error) {
            })
        } else {
            return this.temporadas;
        }

    },

    async getTemporadaByDay(fecha) {
        let temporadas = await this.getAll();
        for (var t in temporadas) {
            var temporada = temporadas[t];
            for (var f in temporada.Fechas) {
                var _fecha = new Date(temporada.Fechas[f]);
                if (fecha.toDateString() == _fecha.toDateString()) {
                    return temporada;
                }
            }
        }
        return { Nombre: 'Media' };
    },

    async getDatesTemporada(nombreTemporada) {
        let temporadas = await this.getAll();
        var temporada = temporadas.find(function (t) { return t.TemporadaID == nombreTemporada });
        var dates = temporada.Fechas.map(function (d) { d = new Date(d); return d; });
        return dates.filter(d => d > new Date());
    },

    getDatesInRange(startDate, stopDate) {
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            dateArray.push(currentDate)
            currentDate = currentDate.addDays(1);
        }
        return dateArray;
    }
}

export default TemporadasService
