import axios from 'axios'

const ReservaService = {

    cleanTempFields(reserva) {
        return {
            ...reserva,
            Extras: reserva.Extras.map(ex => { return { ExtraID: ex.ExtraID }})
        }
    },

    getDesglosePreview(reserva) {
        return axios({
            url: process.env.baseUrl + '/odata/GetDesglosePreview',
            data: { Reserva: this.cleanTempFields(reserva) },
            method: 'POST',
        })
        .then(data => data.data)
        .catch(function (error) {
        })
    }
}


export default ReservaService
