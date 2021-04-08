// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe("when shuffleArr is called", () => {
    it("returns shuffled array when called with an array", () => {
        //Arrange 
        const colors1 = ["purple", "blue", "green", "yellow", "pink"];

        //Act
        const actualShuffle = shuffleArr(colors1);

        //Assert
        expect(actualShuffle.sort()).toEqual(colors1.sort());
    })
    it("returns shuffled array when called with an array", () => {
        //Arrange 
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
    
        //Act
        const actualShuffle = shuffleArr(colors2);
    
        //Assert
        expect(actualShuffle.sort()).toEqual(colors2.sort());
    })
    
})

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]





// b) Create the function that makes the test pass.

//create a function called ShuffleArr
// it takes in an argument that is an array
// the function will shuffle the order of the array
// the function will then remove a random item from the array

const shuffleArr = (array) => {
        array.shift()
        // create three variables one that will store the length of the array.
        var m = array.length, t, i;
      
        // While loop for when there are elements to shuffle…
        while (m) {
      
          // i will represent the shuffling of the data
          i = Math.floor(Math.random() * m--);
      
          // here the array will swap the data that was shuffled with two separate arrays
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }    




// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.

describe("when cubeTheSums is called", () => {
    it("returns 99 when called with [2, 3, 4]", () => {
        //Arrange 
        const cubeAndSum1 = [2, 3, 4];

        //Act
        const actualCubeSum = cubeTheSums(cubeAndSum1);

        //Assert
        expect(actualCubeSum).toEqual(99);
    })
    it("returns 1125 when called with [0, 5, 10]", () => {
        //Arrange 
        const cubeAndSum2 = [0, 5, 10];
    
        //Act
        const actualCubeSum = cubeTheSums(cubeAndSum2);
    
        //Assert
        expect(actualCubeSum).toEqual(1125);
    })
})
var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125





// b) Create the function that makes the test pass.

//for this one I'm going to do a refractor of last weeks sum code.

const cubeTheSums = (arr) =>{
    //this time I had to remove the storage value and cube the value
    sumArr = arr.map(value => {
        return (value**3)
    })
    //after all the values have been cubed they need to be added together
   return sumArr.reduce((a, b) => a + b, 0)
}







// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("when sortTheExtreme is called", () => {
    it("returns [-8, 90] when called with [3, 56, 90, -8, 0, 23, 6]", () => {
        //Arrange 
        const nums1 = [3, 56, 90, -8, 0, 23, 6];

        //Act
        const actualExtreme = sortTheExtreme(nums1);

        //Assert
        expect(actualExtreme).toEqual([-8, 90]);
    })
    it("returns [-59, 109] when called with [109, 5, 9, -59, 8, 24]", () => {
        //Arrange 
        const nums2 = [109, 5, 9, -59, 8, 24];
    
        //Act
        const actualExtreme = sortTheExtreme(nums2);
    
        //Assert
        expect(actualExtreme).toEqual([-59, 109]);
    })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]


// b) Create the function that makes the test pass.
const sortTheExtreme = (array) => {
    // do a sort method 
    var sortedNum = array.sort(function(a, b) {
    return a - b
    })
    // create a method that will get the first value and the last value from an array
    getMinMax = sortedNum.filter(value=> {
        // sorted num 0 will return the first and then the -1 for the end is because .length is always one index forward on the end.
        return value === sortedNum[0] || value === sortedNum[sortedNum.length-1]
    })
    return getMinMax
}
// console.log(sortTheExtreme(nums1))







// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("when makeMockery is called", () => {
    it("returns 'aLbAtRoSs' when called with 'albatross' ", () => {
        //Arrange 
        const testString1 = "albatross";

        //Act
        const actualMockery = makeMockery(testString1);

        //Assert
        expect(actualMockery).toEqual("aLbAtRoSs");
    })
    it("returns 'jAbBeRwOcKy' when called with 'jabberwocky'", () => {
        //Arrange 
        testString2 = "jabberwocky";
    
        //Act
        const actualMockery = makeMockery(testString2);
    
        //Assert
        expect(actualMockery).toEqual("jAbBeRwOcKy");
    })
})

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"





// b) Create the function that makes the test pass.

//create a function called makeMockery
//takes in an array that is a string
const makeMockery = (str) => {
    // create a variable that splits string into array
    var mockerray = str.split("")
    // iterate through each item in the array and capitalize every other letter.
    mockeryCap = mockerray.map((value , index) =>{
        //had a full on conditional before but wanted to fLeX mY tErNaRy mUsClE
       return index % 2 !==0 ? value.toUpperCase() : value
    })
    return mockeryCap.join("");
}
// console.log(makeMockery(testString1))





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("when combineArr is called", () => {
    test("returns [3, 7, 10, 5, 4, 8, 2, 1] when called with [3, 7, 10, 5, 4, 3, 3] [7, 8, 2, 3, 1, 5, 4]  ", () => {
        //Arrange 
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4];

        //Act
        const actualCombine = combineArr(testArray1 , testArray2);

        //Assert
        expect(actualCombine).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
    })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
//create a variable named combineArr
//takes in two arguments that are arrays
const combineArr = (arr1 , arr2) => {
    // the spread operator will allow the two arrays to be merged
    let mergeArr = [...arr1,...arr2];
    // filter method will check if there is duplicates and if there is it will return items that are not duplicates.
    let removeDupes =  mergeArr.filter((value , index) => {
        return mergeArr.indexOf(value) === index
    })
    return removeDupes
}
console.log(combineArr(testArray1 , testArray2))
//the arrays will need to be combined
//they will need to be filtered through to remove any of the duplicates
//the function will return one array


