const returnFirstTwoDrivers = function firstDrivers (drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function lastDrivers(drivers){
    return drivers.slice (-2);
   }
   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
   const createFareMultiplier = function(fareprice){
    return function(times)
    {
        return times* fareprice;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(arrayOfDrivers, firstTwoDrivers){
        return firstTwoDrivers(arrayOfDrivers);
}