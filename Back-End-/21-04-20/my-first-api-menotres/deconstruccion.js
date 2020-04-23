/* // Doconstrucción
const request = {
    body: {
        name: 'Tavo',
        generation: 7,
        age: 25,
        gender: 'male',
        email: 'tavo@email.com'
    }
}
// Doconstruccion de objeto
// const { atributos que quiero obtener } = objeto_al_que _se_le_sacan_los_atributos
const { name, generation } = request.body
console.log('name: ', name)
console.log('generation: ', generation)
// Renombramiento en la deconstrucción
// se usa el operador :
// lado izquierdo nomre del atributo como esta en el objeto
// lado derecho es el nombre deseado
const { name: koderName } = request.body
console.log('koderName: ',  koderName)
// Permite dar valores por defecto
// Se usa el operador de asignacion (=)
const { phone = '123456789' } = request.body
console.log('phone: ', phone)
// todo junto
const { name: mentorName = 'Israel'} = request.body
console.log('mentorName: ', mentorName)
// Buenas practicas
// Usar varias lineas al deconstruir mas de 2 atributos de un objeto
const { name, phone, age, generation } = reques.body // No!!
const {
    name: dudeName = 'dude',
    phone,
    age: dudeAge = 18,
    generation
} = reques.body  //SI!!
console.log(dudeName, phone, dudeAge, generation)
// ---------------------------------------------------------------------------------------------
// Deconstrucción de arreglo
const koders = [ 'Mar', 'Fer', 'Tavo' ]
// const [elementosPosicionales que quiero del arreglo] = arreglo a ser deconstruido
const [ uno, dos, tres, cuatro = 'koderx'] = koders
console.log(uno, dos, tres, cuatro)
const xelement = koders[2]
console.log(xelement)
// ----------------------------------------------------------------------------
const mentors = [
    {
        name: 'Tavo'
    },
    {
        name: 'Fer'
    },
    {
        
    }
]
const [mentor1, mentor2, mentor3] = mentors
const { name: mentorNameNew = 'default' } = mentors[2]
console.log(mentor1, mentor2)
console.log(mentorNameNew)
// Spread y rest operators (...)
// spread es esparcir, nos ayuda a sacar los valores de un ojeto
// rest nos ayuda a agrupar el resto de atributos/miembros en un solo contenedor
// rest operator se caracteriza porque se usa dentro de una deconstrucción, de lado izquierdo del igual
// Doconstrucción
*/

const request = {
    body: {
        name: 'Tavo',
        generation: 7,
        age: 25,
        gender: 'male',
        email: 'tavo@email.com'
    }
}
const {
    email,
    ...restoDelObjeto
} = request.body
console.log('email', email)
console.log('resto del objeto', restoDelObjeto)

// Arrays
const koders = ['Mar', 'Fer', 'Tavo']
const [unkoder, otroKoder, ...restodelArreglo] = koders
console.log('unKoder', unkoder)
console.log('resto del arreglo', restodelArreglo)

//-------- Spread Operator
const koderPersonal = {
    name2: 'name',
    age2: 'age'
}

const koderKodemiaInfo = {
    generation2: 7,
    fechaDeIngreso: new Date()
}

const koderCompleto = {
    ...koderPersonal,
    ...koderKodemiaInfo
}
console.log('koder completo: ', koderCompleto)

const koderMasCompleto = {
    colorFav: 'azul',
    peliFav: 'Dora',
    ...koderCompleto
}
console.log('koder maś completo: ', koderMasCompleto)

//array el spread en los arreglos es posicional

const sextaGen = ['adan', 'itiel']
const septimaGen = ['fer', 'omar', 'tavo']

const sextaYseptima = [...sextaGen, ...septimaGen]
console.log('Generaciones 6 y 7: ', sextaYseptima)

const septimaYsexta = ['inicial', ...septimaGen, 'inmedio', ...sextaGen]
console.log('Generaciones 7 y 6: ', septimaYsexta)