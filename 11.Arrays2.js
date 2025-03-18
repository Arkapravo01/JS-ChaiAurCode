const marvelheroes=['thor','ironman','spiderman']
const dcheroes=['batman','superman','flash']

// marvelheroes.push(dcheroes)
// console.log(marvelheroes);

//Concat returns new array so have to hold in new variable
// const allheroes=marvelheroes.concat(dcheroes)
// console.log(allheroes);

//Spread Operator->like glass shattering everything spreads
const allHeroes=[...marvelheroes,...dcheroes]
console.log(allHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArr.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: 'hitesh' }));//Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));




