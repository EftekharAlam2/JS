/* Problem 01 - Solution: First of all we check if the input value is positive number or not. If it's not then we return the message to request to input a positive value. And if it's positive number value, then we calculate according to the instruction and return the result */
function mindGame(num) {
  const msg1 = "Please enter a positive number";
  if (typeof num === "number") {
    if (num >= 0) {
      let calc1 = num * 3;
      let calc2 = calc1 + 10;
      let calc3 = calc2 / 2;
      const calc4 = calc3 - 5;
      return calc4;
    } else {
      return msg1;
    }
  } else {
    return msg1;
  }
}

/* Problem - 02 Solution: Here, we first check if the input value is string or not. If it's not then we return the message to request to input a string value. And if it's string then we find the length of the string. If it's positive the return the even message and if it's negative then return the odd message */
function evenOdd(word) {
  const msg4 = "Please enter a string";
  const msg2 = "even";
  const msg3 = "odd";
  if (typeof word === "string") {
    if (word.length % 2 == 0) {
      return msg2;
    } else {
      return msg3;
    }
  } else {
    return msg4;
  }
}

/*Problem - 03 Solution: First we check if the input value is a number or not. If it's not then we return the message to request to input a number value. And if it's number then we subtract it with 7 and if the subtract result is less than 7 then we return the result and if it's not then we return the double input value as a result  */
function isLGSeven(num2) {
  const msg5 = "Please enter a number";
  if (typeof num2 === "number") {
    const num3 = num2 - 7;
    if (num3 < 7) {
      return num3;
    } else {
      return num2 * 2;
    }
  } else {
    return msg5;
  }
}

/*Problem - 04 Solution: First of all we check if the input value is array or not. If it's not then we return the message to request to input a array value. And if it's array then we run it in the for loop and see if any array values are negative and if there is. Then we count it and return the result */
function findingBadData(values) {
  const msg6 = "Please enter a array";
  if (Array.isArray(values) === true) {
    let badData = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] < 0) {
        badData++;
      }
    }
    return badData;
  } else {
    return msg6;
  }
}

/*Problem - 04 Solution: Here, we first check if the three input value is numbers or not. If it's not then we return the message to request to input a three number values. And if it's three numbers then we calculate it according to the instruction. If the result is more than 2000 then we subtract the result with 2000 and return the result. And if the result is not more than 2000 then we just return the result */
function gemsToDiamond(firstDiamond, secondDiamond, thirdDiamond) {
  const msg7 = "Please enter the three number values";
  if (
    typeof firstDiamond === "number" &&
    typeof secondDiamond === "number" &&
    typeof thirdDiamond === "number"
  ) {
    const firstFriend = firstDiamond * 21;
    const secondFriend = secondDiamond * 32;
    const thirdFriend = thirdDiamond * 43;
    let totalDiamond = firstFriend + secondFriend + thirdFriend;
    if (totalDiamond > 1000 * 2) {
      totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
  } else {
    return msg7;
  }
}

for (let i = 5; i <= 100; i++) {
  console.log(i);
}
