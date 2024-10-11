import { buscarPersona, buscarPersonaAsync } from "./promesa";

const personasCurps = ['PESV','SANM','MEAN'];
const personasPromesas = personasCurps.map(buscarPersona);

export const personasCiclo = async() =>{
 
    for await (const persona of personasPromesas){
        console.log(persona);
    }
}

export const personaIfAwait = async(curp) =>{
    if ((await buscarPersonaAsync(curp)).nombre==='Zuriel'){
        console.log('Nombre correcto');
    } else {
        console.log('Cambiar nombre');
    }
}

export const obtenerPersonasArr = async() =>{ 
    return await Promise.all(personasCurps.map(buscarPersona));   
};   

export const obtenerPersonaAwait = async (curp) => {
    try {
        const persona = await buscarPersonaAsync(curp);
        return persona;
    } catch (error){
        console.warn(error);
        return{
            nombre: 'Sin nombre',
            apellido: 'Sin apellidos'
        };
    }
}

// ----------------------------------

// export const obtenerPersonasAwait = async (curp) => {
//     try {
//         const persona = await buscarPersonaAsync(curp);
//         return persona;
//     } catch (error){
//         console.warn(error);
//         return{
//             nombre: 'Sin nombre',
//             apellido: 'Sin apellidos'
//         };
//     }
// }

// ----------------------------------