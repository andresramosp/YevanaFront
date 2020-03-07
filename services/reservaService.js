import axios from 'axios'

const ReservaService = {

    getDesglosePreview(reserva) {
        return axios({
            url: process.env.baseUrl + '/odata/GetDesglosePreview',
            data: { Reserva: reserva },
            method: 'POST',
        })
        .then(data => data.data)
        .catch(function (error) {
        })
    }
}


export default ReservaService
