const arrayItem = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
];

function topProduct(items) {
  const value = items.map((object) => {
    return object.profit;
  });

  const max = Math.max(...value);

  // Find the object with the max ID
  const obj = items.find((element) => element.profit === max);
  console.log(obj);
}

function bottomProduct(items) {
  const value = items.map((object) => {
    return object.profit;
  });

  const max = Math.min(...value);

  // Find the object with the max ID
  const obj = items.find((element) => element.profit === max);
  console.log(obj);
}
console.log("top product");
topProduct(arrayItem);
console.log("bottom product");
bottomProduct(arrayItem);

// console.log(`top product
// { name: 'Product C', profit: 93 }
// bottom product
// { name: 'Product A', profit: -75 }`);

const dynastyReign = [
  {
    name: "San Dynasty",
    year: "MXLI",
  },
  {
    name: "Viloria Dynasty",
    year: "MCCCIIII",
  },
  {
    name: "Tan Dynasty",
    year: "MCCCXCVIII",
  },
  {
    name: "Bon Dynasty",
    year: "MCDXLV",
  },
  {
    name: "Maiko Dynasty",
    year: "MDCLXIV",
  },
  {
    name: "Paul Dynasty",
    year: "MCMXLIX",
  },
  {
    name: "Andre Dynasty",
    year: "MMXICX",
  },
];

// function longest word
function longestDynasty(item) {
  const value = item.map((object) => {
    return object.name.length;
  });
  const max = Math.max(...value);

  const obj = item.find((element) => element.name.length === max);
  console.log(obj);
}
console.log("longestDynasty");
longestDynasty(dynastyReign);
// convert year function

function convertionProcess(item) {
  const word = item.map((object) => {
    return object.year.split("");
  });
  //   console.log(word);
  word.forEach((element) => {
    console.log(element);
    // let num = 0;
    let arraycon = [];

    for (let i = 0; i < element.length; i++) {
      num = convertYear(element[i]);
      arraycon.push(num);

      if (element.length === arraycon.length) {
        console.log(
          arraycon.reduce((a, b) => {
            return a + b;
          })
        );
      }
    }
  });
}
console.log("convertionProcess");
convertionProcess(dynastyReign);
function convertYear(item) {
  switch (item) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
