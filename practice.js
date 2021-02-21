//#2 map()
Array.prototype.myMap = function(callback){
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]));
    }
    return newArray;
}

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
Array.prototype.myReduce = function(callback, num = 0){
    let result = 0;
    for(let i = 0; i < this.length; i++){
        result += this[i];
    }
    result = callback(result, num);
    return result;
}

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
Array.prototype.myLastIndexOf = function(target){
    let index = -1
    for(let i = this.length; i >= 0; i--){
        if(this[i] == target){
            return i;
        }
    }
    return index;
}

/*
//lastIndexOf() Testing
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.myLastIndexOf('Dodo')); //output: 3
console.log(animals.myLastIndexOf('Tiger')); //output: 1
*/