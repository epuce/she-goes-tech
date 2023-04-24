"use strict";

let sheetsArr = [];
let sheetsData = {id: "", data: []};
let computedResults = [];
let tempObjt = {};
let tempArr = [];
let submissionURL;

fetchData();

async function fetchData() {
  const response = await fetch(
    "https://www.wix.com/_serverless/hiring-task-spreadsheet-evaluator/sheets",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  submissionURL = data.submissionUrl;
  sheetsArr = data.sheets;

  convertToArrOfObj();
}

const getSum = function (obj, objValue) {
  const objkeys = Object.keys(obj);
  let arrValues = [];
  let result = 0;

  const matchRef = objValue.substring(5, objValue.length - 1);
  arrValues = matchRef.replace(/\s/g, "").split(",");

  const sum = function () {
    arrValues.forEach((element) => {
      if (objkeys.includes(element) && typeof obj[element] === "number") {
        result = result + obj[element];
      } else if (!objkeys.includes(element) && isNaN(parseInt(element, 10))) {
        result = "#ERROR: one of the arguments refers to non-existing cell";
      } else if (objkeys.includes(element) && typeof obj[element] !== "number")
        result = "#ERROR: type does not match";
    });
    return result;
  };

  arrValues.forEach((item) => {
    if (parseInt(item, 10)) {
      result = result + parseInt(item, 10);
    }
  });

  const totalSum = sum();
  return totalSum;
};

const getMultiply = function (obj, objValue) {
  const objkeys = Object.keys(obj);
  let arrValues = [];
  let result = 1;

  const matchRef = objValue.substring(10, objValue.length - 1);
  arrValues = matchRef.replace(/\s/g, "").split(",");

  const multiply = function () {
    arrValues.forEach((element) => {
      if (objkeys.includes(element)) {
        if (typeof obj[element] === "number") {
          result *= obj[element];
        } else {
          result = "#ERROR: type does not match";
        }
      } else if (!objkeys.includes(element) && isNaN(parseInt(element, 10))) {
        result = "#ERROR: one of the arguments refers to non-existing cell";
      }
    });

    return result;
  };

  arrValues.forEach((item) => {
    if (parseInt(item, 10)) {
      result = result * parseInt(item, 10);
    }
  });

  const total = multiply();
  return total;
};

const getDivide = function (obj, objValue) {
  const objkeys = Object.keys(obj);
  let arrValues = [];
  let dividend = null;
  let devisor = null;
  let result;
  let calculation;

  const matchRef = objValue.substring(8, objValue.length - 1);
  arrValues = matchRef.replace(/\s/g, "").split(",");

  const divide = function () {
    if (dividend && devisor) {
      result = dividend / devisor;
      calculation = +parseFloat(result).toFixed(7);
    } else if (dividend && devisor === null) {
      if (objkeys.includes(arrValues[1])) {
        if (typeof obj[arrValues[1]] === "number") {
          result = dividend / obj[arrValues[1]];
          calculation = +parseFloat(result).toFixed(7);
        } else {
          calculation = "#ERROR: type does not match";
        }
      } else {
        calculation =
          "#ERROR: one of the arguments refers to non-existing cell";
      }
    } else if (dividend === null && devisor) {
      if (objkeys.includes(arrValues[0])) {
        if (typeof obj[arrValues[0]] === "number") {
          result = obj[arrValues[0]] / devisor;
          calculation = +parseFloat(result).toFixed(7);
        } else {
          calculation = "#ERROR: type does not match";
        }
      } else {
        calculation =
          "#ERROR: one of the arguments refers to non-existing cell";
      }
    } else if (dividend === null && devisor === null) {
      if (objkeys.includes(arrValues[0]) && objkeys.includes(arrValues[1])) {
        if (
          typeof obj[arrValues[0]] === "number" &&
          typeof obj[arrValues[1]] === "number"
        ) {
          result = obj[arrValues[0]] / obj[arrValues[1]];
          calculation = +result.toFixed(7).replace(/\.?0+$/, "");
        } else {
          calculation = "#ERROR: type does not match";
        }
      } else {
        calculation =
          "#ERROR: one of the arguments refers to non-existing cell";
      }
    }

    return calculation;
  };

  if (arrValues.length > 2) {
    result = "#ERROR: only two arguments are required";
    return result;
  }
  if (parseInt(arrValues[0], 10)) {
    dividend = parseInt(arrValues[i]);
  }
  if (parseInt(arrValues[1], 10) && arrValues[1] !== 0) {
    devisor = parseInt(arrValues[1], 10);
  }

  result = divide();
  return result;
};

function not(obj, objValue) {
  let arrValues = [];
  let result;

  const matchRef = objValue
    .substring(5, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");
  arrValues.push(subString);

  const negate = function () {
    arrValues.forEach((element) => {
      element.forEach((el) => {
        if (obj[el] === true || obj[el] === false) {
          result = !obj[el];
        } else if (
          obj[el] !== true ||
          (obj[el] !== false && typeof obj[el] !== "undefined")
        ) {
          result = "#ERROR: type does not match";
        } else {
          result = "#ERROR: one of the arguments refers to non-existing cell";
        }
      });
    });
    return result;
  };
  const isNegatedValue = negate();
  return isNegatedValue;
}

function and(obj, objValue) {
  let arrValues = [];
  let result;
  let finalResult;
  const matchRef = objValue
    .substring(5, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");
  arrValues.push(subString);

  const compare = function () {
    let list = [];

    arrValues.forEach((element) => {
      element.forEach((el) => {
        if (obj[el] !== "undefined") {
          list.push(obj[el]);
        } else {
          return (result =
            "#ERROR: one of the arguments refers to non-existing cell");
        }
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

  const isTrue = compare();
  return isTrue;
}

function or(obj, objValue) {
  let arrValues = [];
  let result;

  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");
  arrValues.push(subString);

  const compare = function () {
    let list = [];

    arrValues.forEach((element) => {
      element.forEach((el) => {
        if (obj[el] !== "undefined") {
          list.push(obj[el]);
        } else {
          return (result =
            "#ERROR: one of the arguments refers to non-existing cell");
        }
      });
    });

    const isTrue = list.some((el) => {
      return el.toString().includes("true");
    });

    const isWrongType = list.some((el) => {
      return (
        !el.toString().includes("false") && !el.toString().includes("true")
      );
    });
    const notExists = list.some((el) => {
      return typeof obj[el] === "undefined";
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

  const isOneTrue = compare();
  return isOneTrue;
}

function eq(obj, objValue) {
  let arrValues = [];
  let result;
  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");
  arrValues.push(subString);

  const compare = function () {
    let list = [];

    arrValues.forEach((element) => {
      element.forEach((el) => {
        if (typeof obj[el] === "number") {
          list.push(obj[el]);
        } else if (
          typeof obj[el] !== "number" &&
          typeof obj[el] !== "undefined"
        ) {
          result = "#ERROR: type does not match";
        } else {
          result = "#ERROR: one of the arguments refers to non-existing cell";
        }
      });
    });

    result = list[0] === list[1];
    return result;
  };

  const isEqual = compare();
  return isEqual;
}

const getConcatination = function (obj, objValue) {
  let finalArr = [];
  let result;
  const objkeys = Object.keys(obj);
  const matchRef = objValue.substring(8, objValue.length - 1);
  const matchArr = matchRef.split(",");

  const concatinate = function () {
    const isIncluded = matchArr.some((el) => {
      el = el.replace(/ /g, "");
      return objkeys.includes(el);
    });

    if (isIncluded) {
      matchArr.forEach((el, index) => {
        el = el.replace(/ /g, "");
        if (objkeys.includes(el) && typeof obj[el] === "string") {
          finalArr[index] = obj[el];
        } else if (objkeys.includes(el) && typeof obj[el] !== "string") {
          finalArr[index] = "#ERROR: type does not match";
        } else {
          finalArr[index] = matchArr[index]
            .replaceAll('"', "")
            .replace(" ", "");
        }
      });
    } else {
      finalArr = JSON.parse("[" + matchRef + "]");
    }

    result = finalArr.join("");
    return result;
  };

  const concatinatedVal = concatinate();
  return concatinatedVal;
};

const getReference = function (obj, objValue) {
  const objkeys = Object.keys(obj);
  const key = objValue.substring(1);
  let result;

  const returnValue = function (key) {
    if (objkeys.includes(key) && !obj[key].toString().includes("=")) {
      return obj[key];
    } else if (objkeys.includes(key) && obj[key].includes("=")) {
      return getReference(obj, obj[key]);
    } else {
      result = "#ERROR: one of the arguments refers to non-existing cell";
    }
  };

  result = returnValue(key);
  return result;
};

function gt(obj, objValue) {
  let arrValues = [];

  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(",");
  arrValues.push(subString);

  const compare = function () {
    let list = [];

    arrValues.forEach((element) => {
      element.forEach((el) => {
        if (typeof obj[el] === "number") {
          list.push(obj[el]);
        } else if (typeof obj[el] === "undefined") {
          result = "#ERROR: one of the arguments refers to non-existing cell";
        } else {
          result = "#ERROR: type does not match";
        }
      });
    });

    let result = list[0] > list[1];
    return result;
  };

  const isGreater = compare();
  return isGreater;
}
const getIf = function (obj, objValue) {
  let arrValues = [];
  let result;
  const matchRef = objValue
    .substring(4, objValue.length - 1)
    .replace(/\s/g, "");
  const subString = matchRef.split(")");
  arrValues.push(subString);

  const compare = function () {
    arrValues.forEach((element) => {
      if (element[0].includes("(")) {
        const secondFunc = element[0]
          .substring(0, element[0].indexOf("("))
          .toLowerCase();

        const parameters = "=" + element[0] + ")";
        const condition = window[secondFunc](obj, parameters);

        if (condition === true || condition === false) {
          if (condition) {
            const keysArr = element[1].substring(1).split(",");
            result = obj[keysArr[0]];
          } else {
            result = obj[keysArr[1]];
          }
        } else {
          result = "#ERROR: type does not match";
        }
      } else {
        result = "#ERROR: condition function is not chosen";
      }
    });

    return result;
  };

  const conditionValue = compare();
  return conditionValue;
};

const createResultsArr = function (obj) {
  let resultsArr = new Array();
  const arr = [];

  Object.keys(obj).forEach((element) => {
    arr.push(parseInt(element[1], 10));
  });
  const arrLength = arr.reduce((a, b) => Math.max(a, b));

  for (let i = 0; i < arrLength; i++) {
    resultsArr[i] = Array();
  }
  return resultsArr;
};

const evaluateData = function (obj) {
  let resultsArr;
  const clonedObj = Object.assign({}, obj);
  resultsArr = createResultsArr(obj);

  const addToTheList = function (key, value) {
    const arrIndex = parseInt(key[1], 10);
    const index = arrIndex - 1;
    resultsArr[index].push(value);
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" && obj[key].includes("=SUM(")) {
        clonedObj[key] = getSum(obj, obj[key]);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=MULTIPLY(")
      ) {
        clonedObj[key] = getMultiply(obj, obj[key]);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=DIVIDE(")
      ) {
        clonedObj[key] = getDivide(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=GT(")) {
        clonedObj[key] = gt(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=AND(")) {
        clonedObj[key] = and(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=OR(")) {
        clonedObj[key] = or(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=NOT(")) {
        clonedObj[key] = not(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=EQ(")) {
        clonedObj[key] = eq(obj, obj[key]);
      } else if (typeof obj[key] === "string" && obj[key].includes("=IF(")) {
        clonedObj[key] = getIf(obj, obj[key]);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=CONCAT(")
      ) {
        clonedObj[key] = getConcatination(obj, obj[key]);
      } else if (
        typeof obj[key] === "string" &&
        obj[key].includes("=") &&
        !obj[key].includes("(")
      ) {
        clonedObj[key] = getReference(clonedObj, obj[key]);
      } else {
        clonedObj[key] = obj[key];
      }

      addToTheList(key, clonedObj[key]);
    }
  }
  return resultsArr;
};

const loopThroughCreatedArr = function () {
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
        data: evaluateData(tempArr[i].data),
      };
      computedResults.push(sheetsData);
    }
  }

  fetchDataBack(computedResults);
};

const convertToArrOfObj = function () {
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
  loopThroughCreatedArr();
};

const fetchDataBack = function (data) {
  fetch(`${submissionURL}`, {
    method: "POST",
    body: JSON.stringify({
      email: "neringa1991@yahoo.com",
      results: data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": `${submissionURL}`,
    },
  })
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
};
