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

const myWinesFilteredorigin = myWines.filter(
  item =>
    item.name !== null &&
    item.origin !== null &&
    item.subStyle !== null &&
    item.package_unit_type === "bottle" &&
    item.primary_category === "Wine"
);

// let keyWord = [];
// myWinesFiltered
//   .map(items => items.varietal)
//   .filter(item => item !== null && item !== "Albarossa")
//   .map(item => keyWord.push(...item.split(" ")));
let keyWordOrigin = [];
myWinesFilteredorigin
  .map(items => items.origin)
  .filter(item => item !== null)
  .map(item => keyWordOrigin.push(item));
// const cleanedkeyWord = cleanArray(keyWord.filter(item => item.length > 6));
const cleanedkeyWordOrigin = cleanArray(keyWordOrigin);


const RegionList = [];
let c = 0;
for (let j = 0; j < cleanedkeyWordOrigin.length; j++) {
  for (let i = 0; i < keyWordOrigin.length; i++) {
    if (cleanedkeyWordOrigin[j] === keyWordOrigin[i]) c += 1;
  }
  if (
    c > 100
    // cleanedkeyWord[j] !== "Red" &&
    // cleanedkeyWord[j] !== "-" &&
    // cleanedkeyWord[j] !== "Sparkling" &&
    // cleanedkeyWord[j] !== "White" &&
    // cleanedkeyWord[j] !== "Rosé" &&
    // cleanedkeyWord[j] !== "Bordeaux"
  ) {
    RegionList.push(cleanedkeyWordOrigin[j]);
  }

  c = 0;
}
// console.log(varietalList)

const suggestionsRegion = [];
for (let i = 0; i < RegionList.length; i++) {
  let ObjWithLabel = {};
  ObjWithLabel.value = RegionList[i];
  ObjWithLabel.label = RegionList[i];
  suggestionsRegion.push(ObjWithLabel);
}

export default suggestionsRegion;