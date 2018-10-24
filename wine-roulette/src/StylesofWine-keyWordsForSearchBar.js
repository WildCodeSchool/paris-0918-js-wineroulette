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

// Fonction qui déboublonne
function cleanArray(array) {
    let i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]] = 0;
    } for (j in obj) {
      out.push(j);
    } return out;
  }

// la variable stock tous les mots contenant dans myWine.name, ensuite on dédoublonne et on garde que les mot supérieur à 3 lettre
let KeyWordInWinesName = [];
myWines.map(items => items.name).map(item => KeyWordInWinesName.push(...item.split(' ')));
cleanArray(KeyWordInWinesName).filter(item => item.length > 3)

const suggestions = [];

//on place les mots clès dans un objet de la forme { Label : motclé }, objet que l'on met dans un tableau.
// ce tableau est destiné a etre lu par le composant SearchBar
for (let i = 0; i < KeyWordInWinesName.length; i++) {
    let ObjWithLabel = new Object;
    ObjWithLabel.label = KeyWordInWinesName[i];
    suggestions.push(ObjWithLabel)
}



