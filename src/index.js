import ironMan from './assets/img/iron-man.png';
const miImagen = document.createElement("img");
miImagen.src= ironMan;
document.body.appendChild(miImagen);
// IMG -- no tocar
import './style.css';
import { personasCiclo, personaIfAwait} from './js/await-eje';
personasCiclo();
personaIfAwait('PESV');

// ----------------------------------

// console.time('await');

// obtenerPersonaAwait('PESV')
//     .then(persona =>{
//         console.log(persona);
//         console.timeEnd('await');
//     }).catch(console.warn);

// ----------------------------------

// buscarPersona('MEAN')
//     .then(persona=>console.log(persona))
//     .catch(console.warn);

// buscarPersonaAsync('PESV')
//     .then(persona=>console.log(persona))
//     .catch(console.warn);

// buscarPersonaAsync('PESC')
//     .then(persona=>console.log(persona))
//     .catch(console.warn);

// ----------------------------------

// promesaLenta.then(console.log);
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
// .then (console.log);

// ----------------------------------

// const personaCurp = 'MEAN';
// const persona2Curp = 'SANM';
// const persona3Curp = 'PESC';

// ----------------------------------

// buscarPersona(personaCurp).then(persona =>{

//     buscarPersona(persona2Curp).then(persona2 =>{
//         console.log(`Registrando a ${persona.nombre} y ${persona2.nombre} en la BD`)
//     });
// });

// ----------------------------------


// buscarPersona (personaCurp, (err,persona) =>{
    
//     if (err) {
//         return console.error(err);
//     }
//     buscarPersona(persona2Curp, (err,persona2)=>{
//         if (err) {
//             return console.error(err);
//         }
//         buscarPersona( persona3Curp, (err,persona3)=>{
//             if (err){
//                 return console.error(err);
//             }
//             console.log(`Registrando a ${persona.nombre} 
//             ${persona2.nombre} 
//             ${persona3.nombre} en la BD`);
//         });
//     });
// });

// console.log('Fin del programa')

// ----------------------------------


// import { personaIfAwait, personasCiclo } from './js/await-eje';
// personasCiclo();
// personaIfAwait('PESV');

// ----------------------------------

// import { obtenerPersonasArr, obtenerPersonasAwait } from './js/await-eje';

// console.time('await');

// obtenerPersonasAwait('MEAC')
//     .then( persona =>{
//         console.log(persona);
//         console.timeEnd('await');
//     }).catch(console.warn);

// obtenerPersonasArr().then(personas =>{
//     console.table(personas);
//     console.timeEnd('await');
// });

// ----------------------------------