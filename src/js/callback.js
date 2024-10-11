const personas = {
    PESV: {
        nombre: 'Zuriel',
        apellido: 'Villegas Anaya'
    },
    SANM: {
        nombre: 'Leticia',
        apellido: 'Anaya Guerrero'
    },
    MEAN: {
        nombre: 'Zacarias',
        apellido: 'Villegas Campuzano'
    },
}

export const buscarPersona = (curp, callback)=>{
    const persona = personas[curp];
    if (persona) {
        callback(null, persona);
    } else {
        callback(`No existe persona con el CURP ${curp}`);
    }
}

// callback(persona);