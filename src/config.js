function buildNotes(quantity){
  let notes = [];
  let symbols = {1: 'n', 2: 'r', 3: 'l'};
  for (let i = 0; i < quantity; i++) {
    let symbolIndex = Math.floor(Math.random() * 3) + 1;
    let mute = Math.floor(Math.random() * 2) + 1;
    let note = {index: i, symbol: symbols[symbolIndex], mute: mute};
    notes.push(note);
  }
  return notes;
}

export default {
  gameWidth: 1000,
  gameHeight: 600,
  localStorageName: 'killerTwerking',
  rowSize: 10,
  songs: [
    {
      title: 'Gasolina',
      notes: buildNotes(100)
    }
  ]
}

// export default {
//   gameWidth: 1270,
//   gameHeight: 600,
//   localStorageName: 'killerTwerking',
//   rowSize: 10,
//   songs: [
//     {
//       title: 'Gasolina',
//       notes: [
//         {index: 1, symbol:'n',mute:1},
//         {index: 2, symbol:'r',mute:1},
//         {index: 3, symbol:'n',mute:2},
//         {index: 4, symbol:'n',mute:2},
//         {index: 5, symbol:'r',mute:1},
//         {index: 6, symbol:'l',mute:1},
//         {index: 7, symbol:'r',mute:1},
//         {index: 8, symbol:'n',mute:2},
//         {index: 9, symbol:'n',mute:2},
//         {index: 10, symbol:'n',mute:1},
//         {index: 11, symbol:'l',mute:1},
//         {index: 12, symbol:'l',mute:1},
//         {index: 13, symbol:'r',mute:2},
//         {index: 14, symbol:'r',mute:2},
//         {index: 15, symbol:'r',mute:1},
//         {index: 16, symbol:'l',mute:1},
//         {index: 17, symbol:'l',mute:1},
//         {index: 18, symbol:'r',mute:2},
//         {index: 19, symbol:'n',mute:2},
//         {index: 20, symbol:'n',mute:1},
//         {index: 20, symbol:'n',mute:1},
//         {index: 21, symbol:'r',mute:1},
//         {index: 22, symbol:'n',mute:2},
//         {index: 23, symbol:'l',mute:2},
//         {index: 24, symbol:'r',mute:1},
//         {index: 25, symbol:'l',mute:1},
//         {index: 26, symbol:'l',mute:1},
//         {index: 27, symbol:'n',mute:2},
//         {index: 28, symbol:'r',mute:2},
//         {index: 29, symbol:'r',mute:1},
//       ]
//     }
//   ]
// }
