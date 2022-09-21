// const fi = (function () {
//   return {
//     libraryMethod: function() {
//       return
//     },

//     each: function(collection, callback) {
//       for(let accessor in collection) {
//         callback(collection[accessor])
//       }

//       return collection;
//     },

//     map: function(collection, callback) {
//       let modifiedArray = []
//       for(let accessor in collection) {
//         modifiedArray.push(callback(collection[accessor]))
//       }
//       return modifiedArray;
//     },

//     reduce: function() {

//     },

//     functions: function() {

//     },


//   }
// })()

// fi.libraryMethod()

function myReduce(collection, callback, acc) {
  let newCollection = standardizeInput(collection)
  if (!acc) {
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
  }
  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc
}