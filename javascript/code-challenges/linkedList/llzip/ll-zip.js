'use strict';


llZip(givenListOne, givenListTwo) {


  if (givenListOne === null && givenListTwo !== null) { return givenListTwo; }
  if (givenListOne !== null && givenListTwo === null) { return givenListOne; }
  if (givenListOne === null && givenListTwo === null) { return false; }
  let currentNodeOne = givenListOne.head;
  let currentNodeTwo = givenListTwo.head;
  while (givenListOne !== null && givenListTwo !== null) {
    if (currentNodeOne.next !== null && currentNodeTwo !== null) {
      currentNodeTwo.next = currentNodeOne.next;
      currentNodeOne.next = currentNodeTwo;
    }
    if (currentNodeOne.next === null) {
      currentNodeOne = currentNodeTwo.next;
    }
    if (currentNodeTwo.next === null) {
      currentNodeOne = currentNodeOne.next;
    }
    currentNodeOne = currentNodeOne.next;
    currentNodeTwo = currentNodeTwo.next;
  }
  return givenListOne;
}

