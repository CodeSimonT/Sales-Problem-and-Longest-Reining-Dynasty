const arrayItem = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
];
// top product function
function topProduct(items) {
  // map the profit to locat the profit in the object
  const value = items.map((object) => {
    return object.profit;
  });
  // get the maximum value
  const max = Math.max(...value);

  // Find the object with the max ID
  const obj = items.find((element) => element.profit === max);
  console.log(obj);
}

function bottomProduct(items) {
  // map the profit to locat the profit in the object
  const value = items.map((object) => {
    return object.profit;
  });
  // get the minimum value
  const max = Math.min(...value);

  // Find the object with the max ID
  const obj = items.find((element) => element.profit === max);
  console.log(obj);
}
console.log("top product");
topProduct(arrayItem);
console.log("bottom product");
bottomProduct(arrayItem);

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
    year: "MMMXICX",
  },
];

// convert year function
function convertionProcess(item) {
  const word = item.map((object) => {
    //split the year to place it in array format
    return object.year.split("");
  });
  // array of total converted for each object object value
  let arrayTotal = [];

  word.forEach((element) => {
    // array of converter roman integer
    let arraycon = [];

    for (let i = 0; i < element.length; i++) {
      //each element will converted to year number
      num = convertYear(element[i]);
      arraycon.push(num);
      // if each of the element is converted then add it all and push to arrayTotal
      if (element.length === arraycon.length) {
        let item = arraycon.reduce((a, b) => {
          return a + b;
        });
        arrayTotal.push(item);
      }
    }
  });
  // get the maximum value and find the index of it
  let answer = Math.max(...arrayTotal);
  let findIndex = arrayTotal.indexOf(Number(answer));
  //minus a 1000 year
  answer - 1000;

  console.log("longest dynasty");
  //display the longest dynasty on the console
  console.log(dynastyReign[findIndex]);
}
convertionProcess(dynastyReign);

// function for convertion of roman integers
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
