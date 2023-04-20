let sheetsArr = [];
let sheetsData = {id: "", data: []};
let computedResults = [];
let tempObjt = {};
let tempArr = [];

async function fetchData() {
  const response = await fetch(
    "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets",
    {
      method: "GET",
    }
  );
  const data = await response.json();

  return data;
  // .then((response) => response.json())
  // .then(function (data) {
  //   sheetsArr = data.sheets;
  //   console.log(sheetsArr);
  // });
}

fetchData().then((data) => {
  sheetsArr = data.sheets;
  loopingThroughSheets();
});

// OPERATORS FUNCTIONS
const getSum = function (obj) {
  objValues = Object.values(obj);
  objkeys = Object.keys(obj);
  let arrValues = [];

  objValues.forEach((value) => {
    if (typeof value === "string" && value.includes("=SUM(")) {
      let keys = [];
      const matchRef = value.substring(5, value.length - 1);
      arrValues = matchRef.replace(/\s/g, "").split(",");
    }
  });
  let initialValue = 0;

  const sum = function (arrValues, objkeys) {
    // let initialValue = 0;
    console.log(arrValues);
    console.log(objkeys);

    arrValues.every((element) => {
      console.log(initialValue);
      if (objkeys.includes(element) && typeof element === "string") {
        initialValue = initialValue + obj[element];
      } else if (!objkeys.includes(element) && isNaN(parseInt(element, 10))) {
        console.log("One of the arguments is wrong type");
      } else {
        console.log("not worked");
      }

      return initialValue;
    });
    return initialValue;
  };
  // must be number type, adding all the simple numbers to the initialValue
  arrValues.forEach((item) => {
    if (parseInt(item, 10)) {
      initialValue = initialValue + parseInt(item, 10);
    }
  });

  const total = sum(arrValues, objkeys);

  return total;
};

const getMultiply = function (obj) {
  objValues = Object.values(obj);
  objkeys = Object.keys(obj);
  let arrValues = [];

  objValues.forEach((value) => {
    if (typeof value === "string" && value.includes("=MULTIPLY(")) {
      const matchRef = value.substring(10, value.length - 1);
      console.log(matchRef);
      arrValues = matchRef.replace(/\s/g, "").split(",");
    }
  });
  let initialValue = 1;

  const multiply = function (arrValues, objkeys) {
    console.log(arrValues);
    console.log(objkeys);

    arrValues.every((element) => {
      if (objkeys.includes(element) && typeof element === "string") {
        initialValue = initialValue * obj[element];
      } else if (!objkeys.includes(element) && isNaN(parseInt(element, 10))) {
        console.log("One of the arguments is wrong type");
      } else {
        console.log("not worked");
      }

      return initialValue;
    });
    return initialValue;
  };
  // must be number type, adding all the simple numbers to the initialValue
  arrValues.forEach((item) => {
    if (parseInt(item, 10)) {
      initialValue = initialValue + parseInt(item, 10);
    }
  });

  const total = multiply(arrValues, objkeys);

  return total;
};

const getDivide = function () {};
const getFirstGreater = function () {};
const getEqual = function () {};
const getNot = function () {};
const getAnd = function () {};
const getOr = function () {};
const getIf = function () {};
const getConcat = function () {};

// CHOOSING THE RIGHT OPERATOR FUNCTION
const evaluateData = function (obj) {
  console.log(obj);

  // console.log(Object.values(obj));
  let newObject = [];
  console.log(newObject);
  const arr = [];
  const keyNumb = Object.keys(obj).forEach((element) => {
    arr.push(parseInt(element[1], 10));
  });
  const arrLength = arr.reduce((a, b) => Math.max(a, b));

  newObject = new Array(arrLength).fill([]);
  console.log(newObject);

  // SUM
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" && obj[key].includes("=SUM(")) {
        obj[key] = getSum(obj);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=MULTIPLY(")
      ) {
        obj[key] = getMultiply(obj);
      }
      console.log(obj);
      console.log(newObject);
      console.log(parseInt(key[1], 10));
      newObject[parseInt(key[1], 10) - 1].push(obj[key]);
    }
  }
  console.log(newObject);
  return newObject;

  // MULTIPLY
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" && obj[key].includes("=MULTIPLY(")) {
        obj[key] = getSum(obj);
      }
    }
  }
  // const keys = Object.keys(obj);
  // console.log(keys);
  // var result = Object.entries(obj).map((value) => value);
  // console.log(obj);

  // for (let [key, value] of Object.entries(obj)) {
  //   console.log(Object.entries(obj));
  //   console.log(`${key}: ${value}`);
  //   if (typeof value === "string" && value.includes("=SUM(")) {
  //     value = getSum(obj);
  //     console.log({...obj, value});

  //     // console.log(value);
  //   }
  // }

  // objValues = Object.values(obj);
  // console.log(objValues);
  objValues.forEach((value) => {
    // if (
    //   typeof value === "string" &&
    //   value.includes("=") &&
    //   !value.includes("=SUM(") &&
    //   !value.includes("=MULTIPLY(") &&
    //   !value.includes("=DIVIDE(") &&
    //   !value.includes("=GT(") &&
    //   !value.includes("=EQ(") &&
    //   !value.includes("=AND(") &&
    //   !value.includes("=OR(") &&
    //   !value.includes("=IF(") &&
    //   !value.includes("=CONCAT(") &&
    //   !value.includes("=NOT(")
    // ) {
    // }
    // if (typeof value === "string" && value.includes("=SUM(")) {
    //   console.log(obj[value]);

    //   getSum(obj);
    // }
    if (typeof value === "string" && value.includes("=MULTIPLY(")) {
    }
    if (typeof value === "string" && value.includes("=DIVIDE(")) {
    }
    if (typeof value === "string" && value.includes("=GT(")) {
    }
    if (typeof value === "string" && value.includes("=EQ(")) {
    }
    if (typeof value === "string" && value.includes("=AND(")) {
    }
    if (typeof value === "string" && value.includes("=OR(")) {
    }
    if (typeof value === "string" && value.includes("=IF(")) {
    }
    if (typeof value === "string" && value.includes("=CONCAT(")) {
    }
    if (typeof value === "string" && value.includes("=NOT(")) {
    }
    if (typeof value === "string" && !value.includes("=")) {
    }
  });
  return newObject;
};

const loopingThroughCreatedArr = function () {
  for (let i = 0; i < tempArr.length; i++) {
    if (Object.keys(tempArr[i].data).length === 0) {
      sheetsData = {
        id: tempArr[i].id,
        data: [],
      };
      computedResults.push(sheetsData);
    } else {
      sheetsData = {
        id: tempArr[i].id,
        data: evaluateData(tempArr[7].data),
      };
    }
  }
};

const loopingThroughSheets = function () {
  let obj = {};
  let obj2 = {};

  for (let i = 0; i < sheetsArr.length; i++) {
    obj2 = {};
    for (let z = 0; z < sheetsArr[i].data.length; z++) {
      for (let a = 0; a < sheetsArr[i].data[z].length; a++) {
        let charCode = 65 + a;

        obj2[`${[String.fromCharCode(charCode)]}${[z + 1]}`] =
          sheetsArr[i].data[z][a];
      }
    }
    obj = {id: sheetsArr[i].id, data: obj2};
    tempArr.push(obj);
  }
  console.log(tempArr);
  loopingThroughCreatedArr();
};

loopingThroughSheets();

const calculateData = function (arr) {
  if (arr.length === 0) {
    return arr;
  } else if (arr.length !== 0) {
    evaluateData();
  }
};

//

// if arr.length yra
// const calculateData=function(){
//   if()
// }
// results.push(sheetsData)

// const data = JSON.stringify({
//   email: "neringa1991@yahoo.com",
//   results: computedValue,
// });

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   body: data,
//   // other params
// })
//   .then((response) => response.json())
//   .then(function (data) {
//     // returns id, and crated timestamp together with other data
//     console.log(data);
//   });
