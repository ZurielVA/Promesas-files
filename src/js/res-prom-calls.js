import { buscarPersona as buscarPersonaCallback } from './js/callback';
import { buscarPersona } from './js/promesa';

const personaCurp = 'PESV';
const persona2Curp = 'SANM';
const persona3Curp = 'PESC';

// buscarPersona(personaCurp).then(persona => {
//     buscarPersona(persona2Curp).then(persona2 =>{
//         console.log(`Registrando a ${persona.nombre} y ${persona2.nombre} en la BD`);
//     });
// });

Promise.all([buscarPersona(personaCurp),
            buscarPersona(persona2Curp),
            buscarPersona(persona3Curp)])
            .then(([persona, persona2, persona3])=>{
                console.log(`Registrando a ${persona.nombre},
                    ${persona2.nombre},
                    ${persona3.nombre} en la BD`)
            }).catch(err => {
                alert(err)
            }).finally(()=>{
                console.log('Fin del promise.all');
            })

console.log('Fin del programa');