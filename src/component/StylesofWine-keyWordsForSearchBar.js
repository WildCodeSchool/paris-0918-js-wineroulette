const myWines = require("../myWineList.json");

// Fonction qui déboublonne
const cleanArray = array => {
  let i,
    j,
    len = array.length,
    out = [],
    obj = {};
  for (i = 0; i < len; i++) {
    obj[array[i]] = 0;
  }
  for (j in obj) {
    out.push(j);
  }
  return out;
};

const myWinesFiltered = myWines.filter(
  item =>
    item.name !== null &&
    item.subStyle !== null &&
    item.package_unit_type === "bottle" &&
    item.primary_category === "Wine"
);

// let keyWord = [];
// myWinesFiltered
//   .map(items => items.varietal)
//   .filter(item => item !== null && item !== "Albarossa")
//   .map(item => keyWord.push(...item.split(" ")));
let keyWord = [];
myWinesFiltered
  .map(items => items.varietal)
  .filter(item => item !== null && item !== "Albarossa")
  .map(item => keyWord.push(item));
// const cleanedkeyWord = cleanArray(keyWord.filter(item => item.length > 6));
const cleanedkeyWord = cleanArray(keyWord);


const varietalList = [];
let c = 0;
for (let j = 0; j < cleanedkeyWord.length; j++) {
  for (let i = 0; i < keyWord.length; i++) {
    if (cleanedkeyWord[j] === keyWord[i]) c += 1;
  }
  if (
    c > 100 &&
    cleanedkeyWord[j] !== "Red" &&
    cleanedkeyWord[j] !== "-" &&
    cleanedkeyWord[j] !== "Sparkling" &&
    cleanedkeyWord[j] !== "White" &&
    cleanedkeyWord[j] !== "Rosé" &&
    cleanedkeyWord[j] !== "Bordeaux"
  ) {
    varietalList.push(cleanedkeyWord[j]);
  }

  c = 0;
}
// console.log(varietalList)

const suggestions = [];
for (let i = 0; i < varietalList.length; i++) {
  let ObjWithLabel = {};
  ObjWithLabel.value = varietalList[i];
  ObjWithLabel.label = varietalList[i];
  suggestions.push(ObjWithLabel);
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
