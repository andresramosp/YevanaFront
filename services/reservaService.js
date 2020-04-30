import axios from 'axios'

const ReservaService = {

    cleanTempFields(reserva) {
        delete reserva.Desglose;
        return {
            ...reserva,
            Extras: reserva.Extras.map(ex => 
                { 
                    delete ex.Precio; 
                    delete ex.Calculo; 
                    delete ex.PrecioMaximo; 
                    return ex 
                }),
            Vehiculo: { VehiculoID: reserva.Vehiculo.VehiculoID }
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
    },

    createReserva(reserva) {
        return axios({
            url: process.env.baseUrl + '/odata/oReserva',
            data: this.cleanTempFields(reserva),
            method: 'POST',
        })
        .then(data => data.data)
        .catch(function (error) {
            if (error.response) {
              throw error.response.data.error;
            } else {
              throw error.message;
            }
          });
    },

    getCliente(email, password) {
        return axios({
            url: process.env.baseUrl 
            + "/odata/GetExistingCustomer(Email='" + email.replace('.', '_') + "', Password='" + password + "')",
            method: 'GET',
        })
        .then(data => data.data)
    }
}


export default ReservaService
