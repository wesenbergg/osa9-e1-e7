// type Operation = 'multiply' | 'add' | 'divide'

// const calculator = (a: number, b: number, op : Operation): number => {
//   switch(op) {
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       if( b === 0) throw new Error('Can\'t divide by 0!');
//       return a / b;
//     case 'add':
//       return a + b;
//     default:
//       throw new Error('Operation is not multiply, add or divide!');
//   }
// }

// const x: number = Number(process.argv[2])
// const y: number = Number(process.argv[3])
// const s: Operation = String(process.argv[4])
// console.log('Result:', calculator(x, y, s));