const State = {
    menuOpen: false,
    menuOpaque: true,
    activePage: 'Inicio',
    footerVisible: true,
    menuVisible: true,
    reserva: null,

    set(prop, value, persisted) {
        this[prop] = value;
        if (persisted && process.client) {
            localStorage.setItem('State.' + prop, JSON.stringify(value))
        }
    },
    
    get(prop) {
        let result = this[prop];
        if (!result && process.client) {
            result = localStorage.getItem('State.' + prop);
            result = JSON.parse(result);
        }
        return result;
    }
}
export default State;