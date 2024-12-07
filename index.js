// Code for Program 1 of practical No.7 starts here
{
  const confirmBtn = document.getElementById("confirmBtn");
  confirmBtn.onclick = multiply;

  function multiply() {
    const numberInput = document.getElementById("numberInput").value;
    const tableContainer = document.getElementById("tableContainer");

    let tableHTML =
      ` <p>Multiplication Table of ${numberInput}:</p>` + `<table>`;
    for (i = 1; i <= 10; i++) {
      tableHTML += `<tr> <td> ${numberInput} x ${i} = ${
        numberInput * i
      } </td> </tr> `;
    }

    tableHTML += "</table>";
    tableContainer.innerHTML = tableHTML;
  }
}

// Code for program number  7.2 starts from here : Largest of three numbers
{
  const big3Btn = document.getElementById("big3Btn");
  const Num1 = document.getElementById("userNumInput1").value;
  const Num2 = document.getElementById("userNumInput2").value;
  const Num3 = document.getElementById("userNumInput3").value;

  function findLargest() {
    const Num1 = document.getElementById("userNumInput1").value;
    const Num2 = document.getElementById("userNumInput2").value;
    const Num3 = document.getElementById("userNumInput3").value;
    const biggNumb = document.getElementById("biggNumb");

    numArray = [Num1, Num2, Num3];

    let largestNumber = numArray.reduce(largestofthree);

    biggNumb.innerHTML = `The largest among (${Num1}, ${Num2}, ${Num3}) is : ${largestNumber}`;

    function largestofthree(accumulator, element) {
      let biggestNumber = Math.max(accumulator, element);
      return biggestNumber;
    }
  }
}

// ----------------------------------------------------------------

// ------------Code for practical 7.3 starts from here-------------
// Factorial Javascript Codes
document
  .getElementById("factorialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const numberInput = document.getElementById("number");
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
      alert("Please enter a valid non-negative number.");
      return;
    }

    const resultElement = document.getElementById("factorialResult");
    resultElement.textContent = `Factorial of ${number} is ${factorial(
      number
    )}`;
  });

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Start of practical 7.4

document.getElementById("start").addEventListener("click", () => {
  let sum = 0;
  let count = 0;

  while (true) {
    let input = prompt("Enter a positive number (or 0 to finish):");

    // Convert input to a number
    let number = Number(input);

    // Validate input
    if (isNaN(number) || number < 0) {
      alert("Please enter a valid positive number.");
      continue;
    }
    if (number === 0) {
      break;
    }

    sum += number;
    count++;
  }

  let average = count === 0 ? 0 : sum / count;

  // Display results
  const resultDiv = document.getElementById("SumAverageResult");
  document.getElementById("sum").textContent = `Sum: ${sum}`;
  document.getElementById("average").textContent = `Average: ${average.toFixed(
    2
  )}`;
  resultDiv.classList.remove("hidden");
});
