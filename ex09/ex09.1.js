var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora > 0 && hora < 5) {
    console.log('Boa Madrugada!')
} else if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tare!')
} else {
    console.log('Boa noite!')
}