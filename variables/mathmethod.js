console.log(Math.abs(-4))
console.log(Math.sqrt(25))
console.log(Math.cbrt(27))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.round(4.4))
console.log(Math.floor(Math.random() *10) +1)
console.log(Math.max(10,20,30))
console.log(Math.min(10,20,30))

/*function roll()
{
  let dice = Math.floor(Math.random()*6)+1;
  console.log('you rolled',dice);
}
roll();*/
//string methods//

let arr = 'swaroop is a good boy';
let a = arr.length;
console.log(a)

let b = arr.toUpperCase()
console.log(b)

let c = arr.toLowerCase()
console.log(c)

let d = arr.trim()
console.log(d)


let e = arr.charAt(1)
console.log(e)

let f = arr.indexOf('w')
console.log(f)

let g = arr.lastIndexOf('p')
console.log(g)

g = arr.includes('b')
console.log(g)

g = arr.concat(' studied')
console.log(g)

g = arr.replace('swaroop','joy')
console.log(g)

g = arr.substring(0,12)
console.log(g)

g = arr.slice(0,7)
console.log(g)

g = arr.split(',')
console.log(g)

g = arr.startsWith('s')
console.log(g)

g = arr.endsWith('y')
console.log(g)

g = arr.repeat(' 3')
console.log(g)

//clean user input//
let name = 'swaroop';
console.log(name.trim());

let email = 'pra.swaroop1991@gmail.com';
console.log(email.endsWith('gmail.com'))

let message = 'you are a fool';
console.log(message.replace('you','swaroop'))

let fullName = 'ch swaroop';
console.log(fullName.split(' '))

//BOM//

let h = window.location.href;
console.log(h)
