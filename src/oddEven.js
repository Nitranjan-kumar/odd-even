function generateNumber() {
  // generate a random integer(hint : Math.random)
  return Math.floor(Math.random() * 100) + 1;
}

function checkOddEven(num) {
  // logic for even / odd
  let resultelement = document.getElementById("odd-even");
  if (num % 2 == 0) {
    resultelement.textContent = "The number is even";
  } else {
    resultelement.textContent = "The number is odd";
  }
}

window.onload = function () {
  // add event listeners to the button here
  let button = document.getElementById("generate-number");
  button.addEventListener("click", function () {
    let random = generateNumber();
    checkOddEven(random);

    let final = document.getElementById("number");
    final.textContent = random;

  }
  )
}
  ;

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
