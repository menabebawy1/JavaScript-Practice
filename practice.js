//#2 map()
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i])); //Add the mapped elements to the new array
  }
  return newArray;
};

/*
//map() Testing
function by2(x){
    return x * 2;
}

const array1 = [1,2,3,4];
const result = array1.myMap(by2);
console.log(result); //outputs: [ 2, 4, 6, 8 ]
*/

//#6 reduce()
Array.prototype.myReduce = function (callback, num = 0) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  result = callback(result, num); //Add the extra number to our result
  return result;
};

/*
//reduce() Testing
function reducer(accumulator, currentValue){
    return accumulator + currentValue;
} 

const array1 = [1, 2, 3, 4];
console.log(array1.myReduce(reducer)); //output: 10
console.log(array1.myReduce(reducer, 5)); //output: 15
*/

//#10 lastIndexOf()
Array.prototype.myLastIndexOf = function (target) {
  let index = -1;
  for (let i = this.length; i >= 0; i--) {
    //Go through the array backwards
    if (this[i] == target) {
      return i;
    }
  }
  return index;
};

/*
//lastIndexOf() Testing
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.myLastIndexOf('Dodo')); //output: 3
console.log(animals.myLastIndexOf('Tiger')); //output: 1
*/

//
// #3 Array.prototype.filter
//
function myFilter(arr, length) {
  let temparr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      temparr.push(arr[i]);
    }
  }
  return temparr;
}

//
//#7 Array.prototype.includes
//
function myIncludes(arr, num) {
  let bool = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      bool = true;
      break;
    } else {
      continue;
    }
  }
  return bool;
}

//
//#11 Object.keys()
//
function grabkeys(obj) {
  let temparr = [];

  for (key in obj) {
    temparr.push(key);
  }
  return temparr;
}

let testArray1 = [1, 3, 4];
let testArray2 = [9, 2, 6];

//#1 - forEach() - start
Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const testMyEach = function (p) {
  console.log(p);
};
testArray1.myEach(testMyEach);
//#1 - forEach() - end

//#5 - every() - start
Array.prototype.myEveryThang = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
  }
  return true;
};
const testMyEveryThang = function (p) {
  return p > 5;
};
console.log(testArray1.myEveryThang(testMyEveryThang));
//#5 - every() - end

//#9 - push() - start
Array.prototype.myPush = function (arr, elementToAdd) {
  if (arr.length === 0) {
    arr[0] = elementToAdd;
  } else {
    arr[arr.length] = elementToAdd;
  }
  return arr.length;
};

console.log(testArray1.myPush(testArray2, 7));
console.log(testArray2.myEach(testMyEach));
//#9 - push() - end
