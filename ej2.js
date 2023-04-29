function elementosComunes(array1, array2) {
    let comunes = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j] && !comunes.includes(array1[i])) {
          comunes.push(array1[i]);
          break;
        }
      }
    }
    return comunes;
  }
const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];
console.log(elementosComunes(array1, array2)); 
let array3 = [4, 3, true, 'manzana'];
let array4 = ['pera', 3, false, true, 3, true];
console.log(elementosComunes(array3, array4)); 