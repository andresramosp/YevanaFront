// const camelCase = require('lodash/camelCase')
// const snakeCase = require('lodash/snakeCase')
// const startCase = require('lodash/startCase')

const StringService = {
//   capitalize(string) {
//     return startCase(string)
//   },
//   snakeize(field) {
//     return snakeCase(field)
//   },
//   camelize(data) {
//     if (!Array.isArray(data)) {
//       const dataCc = {}
//       Object.keys(data).forEach((k) => {
//         dataCc[camelCase(k)] = data[k]
//         if (dataCc[camelCase(k)] && typeof dataCc[camelCase(k)] === 'object') {
//           dataCc[camelCase(k)] = this.camelize(data[k])
//         }
//       })
//       return dataCc
//     } else {
//       return data.map((item) => this.camelize(item))
//     }
//   },
  getLocalDate(date) {
    const dateLocal = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    )
    return dateLocal.toISOString()
  },
  // getLocalDateTo(date) {
  //   const dateLocal = new Date(
  //     date.getTime() - date.getTimezoneOffset() * 60 * 1000
  //   )
  //   dateLocal.setDate(dateLocal.getDate() + 1)
  //   return dateLocal.toISOString() //.slice(0, 10)
  // }
}

export default StringService
