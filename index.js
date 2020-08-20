let drivers = ['Tom', 'John', 'Pale', 'Susan']

const returnFirstTwoDrivers = function (drivers){
  let x= [drivers[0], drivers[1]]
return x;
  }
  
const returnLastTwoDrivers = function (drivers){
  let x= [drivers[drivers.length-2], drivers[drivers.length-1]]
return x;
  }
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(n){
  return function (n){
    return n*n;
  }
  
}