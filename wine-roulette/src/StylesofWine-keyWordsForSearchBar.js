// Red Wine :
// Full-bodied
// Smooth
// Full-bodied & Firm
// Full-bodied & Smooth
// Light-bodied & Fruity
// Medium-bodied & Fruity
// ------------------------------------
// White Wine :
// aromatic & flavourful
// Full-bodied & Rich
// Light & Crisp
// Off-dry & Fruity
// ------------------------------------
// RoséWine :
// Easygoing & Fruity
// Medium-bodied & Dry
// Soft & Off-dry
// ------------------------------------
// Champagne :
// Medium-bodied & Flavourful
// Rich & Complex
// ------------------------------------
// Sparkling Wine :
// Light & Fruity
// Medium-bodied & Flavourful
// Rich & Complex


const myWines = require("./myWineList.json")

function cleanArray(array) {
    let i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]] = 0;
    } for (j in obj) {
      out.push(j);
    } return out;
  }


let KeyWordInWinesName = [];
myWines.map(items => items.name).map(item => KeyWordInWinesName.push(...item.split(' ')));
cleanArray(KeyWordInWinesName).filter(item => item.length > 3)

const suggestions = [];

for (let i = 0; i < KeyWordInWinesName.length; i++) {
    let ObjWithLabel = new Object;
    ObjWithLabel.label = KeyWordInWinesName[i];
    suggestions.push(ObjWithLabel)
}



