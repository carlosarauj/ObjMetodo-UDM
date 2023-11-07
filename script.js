let produto = {
    nome: 'Celular',
    preco: 1500
}
let outraCoisa = {
    ...produto,
    material: 'porcelana'
}

produto.nome = 'carlos'
produto.preco = 1.99

console.log(outraCoisa)
console.log(produto)