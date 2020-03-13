const State = {
    menuOpaque: true,
    activePage: 'Inicio',
    footerVisible: true,
    menuVisible: true,
    reserva: null,

    set(prop, value, persisted) {
        this[prop] = value;
        if (persisted) {
            localStorage.setItem('State.' + prop, JSON.stringify(value))
        }
    },
    
    get(prop) {
        let result = this[prop];
        if (!result) {
            result = localStorage.getItem('State.' + prop);
            result = JSON.parse(result);
        }
        return result;
    }
}
export default State;