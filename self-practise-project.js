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
  let initialValue = 1;

  objValues.forEach((value) => {
    if (typeof value === "string" && value.includes("=MULTIPLY(")) {
      const matchRef = value.substring(10, value.length - 1);
      arrValues = matchRef.replace(/\s/g, "").split(",");
    }
  });

  const multiply = function (arrValues, objkeys) {
    arrValues.every((element) => {
      if (objkeys.includes(element) && typeof element === "string") {
        if (typeof obj[element] === "number") {
          initialValue = initialValue * obj[element];
        } else {
          console.log("#ERROR: type does not match");
        }
      } else if (!objkeys.includes(element) && isNaN(parseInt(element, 10))) {
        console.log("#ERROR: type does not match");
      } else {
        console.log("not worked");
      }

      // return initialValue;
    });
    return initialValue;
  };
  // must be number type, adding all the simple numbers to the initialValue
  arrValues.forEach((item) => {
    if (parseInt(item, 10)) {
      initialValue = initialValue * parseInt(item, 10);
    }
  });

  const total = multiply(arrValues, objkeys);
  return total;
};

const getDivide = function (obj) {
  objValues = Object.values(obj);
  objkeys = Object.keys(obj);
  let arrValues = [];
  let dividend = null;
  let devisor = null;
  let result = null;
  objValues.forEach((value) => {
    if (typeof value === "string" && value.includes("=DIVIDE(")) {
      const matchRef = value.substring(8, value.length - 1);
      arrValues = matchRef.replace(/\s/g, "").split(",");
    }
  });

  const divide = function (arrValues, objkeys) {
    let calculation;

    if (dividend && devisor) {
      result = dividend / devisor;
      calculation = parseFloat(result).toFixed(7);
    } else if (dividend && devisor === null) {
      if (objkeys.includes(arrValues[1]) && typeof arrValues[1] === "string") {
        if (typeof obj[arrValues[1]] === "number") {
          result = dividend / obj[arrValues[1]];
          calculation = parseFloat(result).toFixed(7);
        } else {
          console.log("#ERROR: type does not match");
        }
      }
    } else if (dividend === null && devisor) {
      if (objkeys.includes(arrValues[0]) && typeof arrValues[0] === "string") {
        if (typeof obj[arrValues[0]] === "number") {
          result = obj[arrValues[0]] / devisor;
          calculation = parseFloat(result).toFixed(7);
        } else {
          console.log("#ERROR: type does not match");
        }
      }
    } else if (dividend === null && devisor === null) {
      if (
        objkeys.includes(arrValues[0]) &&
        objkeys.includes(arrValues[1]) &&
        typeof arrValues[1] === "string" &&
        typeof arrValues[0] === "string"
      ) {
        if (
          typeof obj[arrValues[0]] === "number" &&
          typeof obj[arrValues[1]] === "number"
        ) {
          result = obj[arrValues[0]] / obj[arrValues[1]];

          calculation = result.toFixed(7).replace(/\.?0+$/, "");
        } else {
          console.log("#ERROR: type does not match");
        }
      }
    }

    return +calculation;
  };
  // must be only 2 values
  if (arrValues.length > 2) {
    return console.log("#ERROR: only two arguments are required");
  }
  if (parseInt(arrValues[0], 10)) {
    dividend = parseInt(arrValues[i]);
  }
  if (parseInt(arrValues[1], 10) && arrValues[1] !== 0) {
    devisor = parseInt(arrValues[1], 10);
  }

  const total = divide(arrValues, objkeys);

  return total;
};
const getFirstGreater = function () {};

const getNot = function (obj, objValue) {
  objkeys = Object.keys(obj);
  let arrValues = [];

  const matchRef = objValue
    .substring(5, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");

  arrValues.push(subString);

  const negate = function (values) {
    let list = [];
    let result;

    console.log(values);

    values.forEach((element) => {
      element.forEach((el) => {
        if (obj[el] === true || obj[el] === false) {
          result = !obj[el];
        } else {
          result = "#ERROR: type does not match";
        }
      });
    });
    return result;
  };

  const isNegatedValue = negate(arrValues);
  return isNegatedValue;
};
const getAnd = function (obj, objValue) {
  objkeys = Object.keys(obj);
  let arrValues = [];

  // const matchRef = value.substring(5, value.indexOf(","));
  const matchRef = objValue
    .substring(5, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");

  arrValues.push(subString);

  const compare = function (values) {
    let list = [];
    let result;
    let finalResult;

    values.forEach((element) => {
      element.forEach((el) => {
        list.push(obj[el]);
      });
    });

    let isTrueOrFalse = list.every((el) => {
      return el.toString().includes("true") || el.toString().includes("false");
    });

    result = list.every((el) => {
      return el === true;
    });

    if (result) {
      finalResult = result;
    } else if (isTrueOrFalse) {
      finalResult = false;
    } else {
      finalResult = "#ERROR: type does not match";
    }

    return finalResult;
  };

  const isTrue = compare(arrValues);
  return isTrue;
};
const getOr = function (obj, objValue) {
  objkeys = Object.keys(obj);
  let arrValues = [];

  // const matchRef = value.substring(5, value.indexOf(","));
  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");

  arrValues.push(subString);

  const compare = function (values) {
    console.log(values);
    let list = [];
    let result;
    let finalResult;

    values.forEach((element) => {
      element.forEach((el) => {
        list.push(obj[el]);
      });
    });
    console.log(list);

    let isTrue = list.some((el) => {
      return el.toString().includes("true");
    });
    let isWrongType = list.some((el) => {
      return (
        !el.toString().includes("false") && !el.toString().includes("true")
      );
    });

    if (isTrue && !isWrongType) {
      result = true;
    } else if (isWrongType) {
      result = "#ERROR: type does not match";
    } else {
      result = false;
    }

    return result;
  };

  const isOneTrue = compare(arrValues);
  return isOneTrue;
};
const getEqual = function (obj, objValue) {
  objkeys = Object.keys(obj);
  let arrValues = [];

  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");

  arrValues.push(subString);

  const compare = function (values) {
    let list = [];
    console.log(values);

    values.forEach((element) => {
      element.forEach((el) => {
        if (typeof obj[el] === "number") {
          list.push(obj[el]);
        } else {
          console.log("#ERROR: type does not match");
        }
      });
    });

    let result = list[0] === list[1];

    return result;
  };

  const isEqual = compare(arrValues);
  return isEqual;
};
const getIf = function () {};
const getConcat = function () {};

// CHOOSING THE RIGHT OPERATOR FUNCTION
const evaluateData = function (obj) {
  console.log(obj);
  let newObject = new Array();
  // console.log(Object.values(obj));
  const clonedObj = Object.assign({}, obj);
  const arr = [];

  Object.keys(obj).forEach((element) => {
    arr.push(parseInt(element[1], 10));
  });
  const arrLength = arr.reduce((a, b) => Math.max(a, b));

  for (let i = 0; i < arrLength; i++) {
    newObject[i] = Array();
  }

  const addToTheList = function (receivedKey, value) {
    const arrIndex = parseInt(receivedKey[1], 10);
    const index = arrIndex - 1;
    newObject[index].push(value);
  };
  // OPERATOR FUNCTIONS INITIATION
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" && obj[key].includes("=SUM(")) {
        clonedObj[key] = getSum(obj);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=MULTIPLY(")
      ) {
        clonedObj[key] = getMultiply(obj);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=DIVIDE(")
      ) {
        clonedObj[key] = getDivide(obj);
      } else if (typeof obj[key] === "string" && obj[key].includes("=GT(")) {
        clonedObj[key] = getFirstGreater(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=AND(")) {
        clonedObj[key] = getAnd(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=OR(")) {
        clonedObj[key] = getOr(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=NOT(")) {
        clonedObj[key] = getNot(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=EQ(")) {
        console.log("INITIATED OPERATOR FUNCTION");
        clonedObj[key] = getEqual(obj, obj[key]);
      }

      addToTheList(key, clonedObj[key]);
    }
  }

  return newObject;
  // // MULTIPLY
  // for (const key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     if (typeof obj[key] === "string" && obj[key].includes("=MULTIPLY(")) {
  //       obj[key] = getSum(obj);
  //     }
  //   }
  // }
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
  // objValues.forEach((value) => {
  //   // if (
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
  //   // }
  //   if (typeof value === "string" && value.includes("=MULTIPLY(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=DIVIDE(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=GT(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=EQ(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=AND(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=OR(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=IF(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=CONCAT(")) {
  //   }
  //   if (typeof value === "string" && value.includes("=NOT(")) {
  //   }
  //   if (typeof value === "string" && !value.includes("=")) {
  //   }
  // });
  // return newObject;
};

const loopingThroughCreatedArr = function () {
  for (let i = 7; i < 8; i++) {
    if (Object.keys(tempArr[i].data).length === 0) {
      sheetsData = {
        id: tempArr[i].id,
        data: [],
      };
      computedResults.push(sheetsData);
    } else {
      sheetsData = {
        id: tempArr[i].id,
        data: evaluateData(tempArr[12].data),
      };
      console.log(sheetsData.data);
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

// loopingThroughSheets();

// const calculateData = function (arr) {
//   if (arr.length === 0) {
//     return arr;
//   } else if (arr.length !== 0) {
//     evaluateData();
//   }
// };

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
