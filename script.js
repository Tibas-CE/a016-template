const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

//pra guardar na cabeça

for (let i in filmes) {
  console.log(`Filme ${filmes[i].titulo}, lançado em ${filmes[i].ano}, dirigido por ${filmes[i].diretor} `);
  for (let j in filmes) {
    console.log(`Tem como elenco: ${filmes[i].elenco}`)
  }
};

//imprime 4 vezes procurar resolver
for (let i in filmes) {
  for(let j in filmes[i]) {
    console.log(`Filme: ${filmes[i].titulo}, lançado ${filmes[i].ano}, dirigido por ${filmes[i].diretor} \n Elenco: ${filmes[i].elenco}`);
  }
};

// laços+laços e laços+condições

// const megaSena = [
//   [1, 2, 3, 4, 5, 6],
//   [11, 22, 33, 44, 55, 66],
//   [10, 20, 30, 40, 50, 60],
//   [9, 19, 29, 29, 49, 59],
// ];

//pratica guiada 01
// if(megaSena.length === 4) {
//   for(let i = 0; i < megaSena.length; i++) {
//     let sorteio = `Sorteio ${i + 1}: `;
//     for(let j = 0; j < megaSena[i].length; j++) {
//       sorteio += `${megaSena[i][j]}`
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("É necessario alterar o número de itens da array");
// }

//pratica guiada 02 e 03, usando o for in e o for of
// if (megaSena.length === 4) {
//   for (let i in megaSena) {
//     let sorteio = `Sorteio ${Number(i) + 1}: `;
//     for (let j of megaSena[i]) {
//       sorteio += `${j} `
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("É necessario alterar o número de itens da array");
// }