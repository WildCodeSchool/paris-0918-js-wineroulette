const myWines = require("./myWineList.json")

// Fonction qui déboublonne
function cleanArray(array) {
    let i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]] = 0;
    } for (j in obj) {
      out.push(j);
    } return out;
  }

// la variable keyWord stock tous les mots contenus dans myWine.varietal, 
// ensuite on dédoublonne les mots supérieurs à 6 lettre
let keyWord = [];
myWines.map(items => items.varietal).filter(item => item !==null).map(item => keyWord.push(...item.split(' ')));
const cleanedkeyWord = cleanArray(keyWord.filter(item => item.length > 6));

//on place ces mots  dans un objet de la forme { value: motclé, Label : motclé }, 
// on met ces objets dans un tableau.
// ce tableau est destiné a etre lu par le composant SearchBar
const suggestions = [];
for (let i = 0; i < cleanedkeyWord.length; i++) {
    let ObjWithLabel = {};
    ObjWithLabel.value = cleanedkeyWord[i];
    ObjWithLabel.label = cleanedkeyWord[i];
    suggestions.push(ObjWithLabel)
}

export default suggestions;


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

