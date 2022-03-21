let amigo = {nome:'João', idade:'21', sexo:'M', proffissao:'Professor', peso:80, engordar(p=0){
    console.log('Engordou')
    this.peso += p // recebe um p (kg)
}} //usar dois pontos (:)

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
