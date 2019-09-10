/* eslint-disable no-unused-vars */
const repeat = (str, num) => {
  let finalString = "";
  let counter = 0;
  while (counter < num) {
      finalString += str;
      counter++;
  }
  return finalString;
}

const sum = (arr) => {
  let finalSum = 0;
  for (let i in arr) {
      finalSum += arr[i];
  }
  return finalSum;
}

const join = (arr, token = "") => {
  let finalString = "";
  for (let i = 0; i < arr.length; i++) {
      finalString += arr[i];
      if (i === arr.length-1) {
          break;
      }
      finalString += token;
  }
  return finalString;
}

const gridGenerator = (num) => {
  let finalString = "";
  for (let i = 0; i < num; i++) { //for each row
      let row = "";
      for (let j = 0; j < num; j++) { //for each char
          if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
              row += " ";
          }
          else {
              row += "#";
          }
      }
      finalString += row + "\n";
  }
  // if (num === 1) {
  //     finalString += "#";
  //     return finalString;
  // }
  // if (num === 2) {
  //     finalString += "# \n #";
  //     return finalString;
  // }
  // else {
  //     let rowA = "";
  //     let rowB = "";
  //     for (let i = 0; i < num / 2; i++) {
  //         rowA += "# ";
  //         rowB += " #";
  //     }
  //     if (num % 2 !== 0) {
  //         rowA += "#";
  //         rowB += " ";
  //     }
  //     for (let i = 0; i < num/2; i++) {
  //         finalString += rowA + "\n";
  //         finalString += rowB + "\n";
  //     }
  //     if (num % 2 !== 0) {
  //         finalString += rowA;
  //     }
  return finalString;
}

const paramify = obj => {
  let finalStr = "";
  //sort object
  let sortedObj = {};
  let sortedArr = [];
  for (let i in obj) {
      sortedArr.push(i);
  }
  sortedArr.sort((a, b) => {return a.localeCompare(b);}).forEach(function(key) {sortedObj[key] = obj[key]});

  for (let key in sortedObj) {
      if (obj.hasOwnProperty(key)) {
          finalStr += `${key}=${obj[key]}&`
      }
  }
  finalStr = finalStr.substring(0,finalStr.length-1)
  return finalStr;
}

const paramifyObjectKeys = obj => {
  let finalStr = "";
  let objArr = Object.keys(obj);
  let sortedObj = {};
  Object.keys(obj).sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }).forEach(function(k) {
      sortedObj[k] = obj[k];
    });
  // for (let i in objArr) {
  //     finalStr += `${objArr[i]}=${obj[objArr[i]]}&`;
  // }
  for (let i in sortedObj) {
      finalStr += `${i}=${sortedObj[i]}&`;
  }
  finalStr = finalStr.substring(0,finalStr.length-1)
  //return sortedObj;
  return finalStr;
}

const sort = arr => {
  //iterate through array
  //create new array
  //create checker var - of most recent value added (-infinity)
  //create placeholder var
  //check if new array includes item
  //if not, check if item is >= checker var
  //if so, put in placeholder and check against remaining arr items
  //then add to arr if passes all tests

  // let mostRecent = -Infinity;
  // let placeHolder;
  // for (let i in arr) {
  //     if (sortedArr.includes(arr[i])) {
  //         continue;
  //     }
  //     if (arr[i] > mostRecent) {
  //         placeHolder = arr[i];
  //     }
  //     for (let j in arr) {
  //         if (placeHolder <= arr[j]) {
  //             continue;
  //         }
  //         else {
  //             arr[j] = placeHolder;
  //         }
  //     }
  //     sortedArr.push(placeHolder);
  // }

  //loops for numbers
  // while(arr.length > 0) {
  //     let min = Math.min.apply(Math, arr);
  //     sortedArr.push(min);
  //     arr = arr.slice(0, arr.indexOf(min)).concat(arr.slice(arr.indexOf(min)+1, arr.length));
  // }
  // let sortedArr = [];
  // for (let i in arr) {
  //     let placeHolder = arr[i];
  //     if (sortedArr.includes(placeHolder)) {
  //         continue;
  //     }
  //     for (let j in arr) {
  //         if (arr[j] !== placeHolder && arr[j] < placeHolder) {
  //             continue;
  //         }

  //     }
  //     sortedArr.push(placeHolder);
  //     }
  // return sortedArr;
  let sortedArr = [];
  while (arr.length > 0) {
      let minVal = arr[0];
      for (let i in arr) {
          if (arr[i] < minVal && !sortedArr.includes(arr[i])) {
              minVal = arr[i];
          }
      }
      sortedArr.push(minVal);
      arr.splice(arr.indexOf(minVal), 1);
  }
  return sortedArr;
}
