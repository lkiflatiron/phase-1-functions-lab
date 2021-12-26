// Code your solution in this file!
const feetPerBlock = 264

function distanceFromHqInBlocks(pickUp) {
  const HQLocation = 42
  return Math.abs(pickUp - HQLocation)
}

function distanceFromHqInFeet(pickUp) {
  const distance = distanceFromHqInBlocks(pickUp);
  return distance * feetPerBlock;
}

function distanceTravelledInFeet(pickUp, dropOff) {
  const distance = Math.abs(pickUp - dropOff);
  return distance * feetPerBlock;
}

function calculatesFarePrice(pickUp, dropOff) {
  //returns the fare for the customer
  const distanceInFeet = distanceTravelledInFeet(pickUp, dropOff)
  if (distanceInFeet <= 400) {
    return 0  
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    const cost = 0.02;
    const chargedDistance = distanceInFeet - 400;
    return cost * chargedDistance;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}