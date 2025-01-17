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

export const buscarPersonaAsync = async(curp) => {
    const persona = personas[curp];
    if (persona) {
        return persona;
        } else {
            throw `No existe persona con el CURP ${curp}`;
        }
}

export const buscarPersona = (curp)=>{
    const persona = personas[curp];
    return new Promise ((resolve, reject)=>{
        if (persona) {
            setTimeout(() => resolve(persona),1000);
        } else {
            reject (`No existe persona con el CURP ${curp}`);
        }
    });
}

// ----------------------------------

// const promesaLenta = new Promise ((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve('Promesa Lenta')
//     }, 2000);
// });
// const promesaMedia = new Promise ((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve('Promesa Media')
//     }, 1500);
// });
// const promesaRapida = new Promise ((resolve, reject)=>{
//     setTimeout(() =>{
//         resolve('Promesa Rapida')
//     }, 1000);
// });

// export{
//     promesaLenta,
//     promesaMedia,
//     promesaRapida
// }

// ----------------------------------