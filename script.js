//*                                      Personal Javascript Project
//*                                        #Testing my JS skills

let firstOperation = "".split(""); // prefix
let secondOperation = "".split(""); // suffix
let operation = ""; //prefix[] - operator - suffix[]
let addOperation = [];
let addResult = 0;
let newOperation = "";

//i know 'firstOperation' LOL...
const del = document.querySelector(".DEL");
const clear = document.querySelector(".AC");
const equalTo = document.querySelector(".equal");
const resultDisplay = document.querySelector(".result");
const calcDisplay = document.querySelector(".calc");
const cells = document.querySelectorAll(".cell2");

let celz;
const runClick = (cell) => {
  cell.addEventListener("click", (e) => {
    calcDisplay.classList.add("scale");
    const vals = cell.innerText;
    if (vals === "÷" || vals === "-" || vals === "+" || vals === "×") {
      // whenever user clicks on an operator create a new array and store text data for calculation
      if (operation !== "") {
        newOperation = cell.innerText;
      }
      if (operation === "") {
        operation = cell.innerText;
      }
    }

    if (newOperation !== "") {
      //  set result of calc as prefix
      console.log(newOperation);
      console.log(prefixDisplayAdd);
      console.log(
        "change first calc into value " + String(addResult).split("").join("")
      );
    }
    if (operation === "") {
      firstOperation.push(cell.innerText);
    } else if (operation !== "") {
      secondOperation.push(cell.innerText);
      addOperation = secondOperation.slice(1);
      // slice the secondOpeartion array from the index 1...and store as a new array. ✅
    }
    celz = cell;
    displayCalc(cell);
    // if new Operation (+, -, /, *) is added to the addOperation array[...] ->> Run a function that calculate's the new value.
    addOperation.forEach((opt) => {
      if (opt === "÷" || opt === "-" || opt === "+" || opt === "×") {
        runNewCalc();
      }
    });
  });
};

cells.forEach(runClick);

// * Display calculation *
//*------------------------
let modifiedDisplay = "";
let calcDis = "";
let display = "";
let prefixDisplay = [];
let suffixDisplay = [];
let prefixDisplayAdd = "";
let suffixDisplayAdd = "";

const displayCalc = (cell) => {
  display = calcDis += cell.innerText;
  let newDisplay = display.split("");

  for (let i = 0; i <= secondOperation.length; i++) {
    if (
      secondOperation[i] === "÷" ||
      secondOperation[i] === "-" ||
      secondOperation[i] === "+" ||
      secondOperation[i] === "×"
    ) {
      // newOperation = secondOperation[i]

      secondOperation.splice(i, 1);

    }
  }

  modifiedDisplay = newDisplay.join("");
  // ⬇️  a single array prefix and suffix individually. and then join them together with the operator at their center ⬇️
  let modifiedDisplayComma = Number(modifiedDisplay).toLocaleString();
  prefixDisplay = firstOperation.join("");
  prefixDisplayAdd = Number(prefixDisplay).toLocaleString();
  prefixDisplayAdd === "0" ? (prefixDisplayAdd = "") : "false";
  suffixDisplay = secondOperation.join("");
  suffixDisplayAdd = Number(suffixDisplay).toLocaleString();
  suffixDisplayAdd === "0" ? (suffixDisplayAdd = "") : "false";
  calcDisplay.innerText =
    prefixDisplayAdd + " " + operation + " " + suffixDisplayAdd;
};

// * Clear calculation *
//*------------------------
clear.addEventListener("click", () => {
  calcDisplay.classList.remove("scale");
  calcDisplay.innerText = "";
  resultDisplay.innerText = "00";
  firstOperation = "".split("");
  secondOperation = "".split("");
  operation = "";
  calcDis = "";
});

// * Delete calculation *
//*------------------------
let newModifiedDisplay = "";
del.addEventListener("click", () => {
  const disArr = modifiedDisplay.split("");
  // reverse array
  // slice from index 1
  //reverse array back to normal ...✅
  const reveresdModified = disArr.reverse().slice(1).reverse(); // <<-
  for (let i = 0; i <= secondOperation.length; i++) {
    secondOperation !== [] ? secondOperation.splice(secondOperation[i], 1) : "";
  }
  for (let i = 0; i <= firstOperation.length; i++) {
    firstOperation !== [] ? firstOperation.splice(firstOperation[i], 1) : "";
  }
  operation !== "" ? (operation = "") : "";

  newModifiedDisplay = reveresdModified.join("");
  calcDisplay.innerText = newModifiedDisplay;
  modifiedDisplay = newModifiedDisplay;
});

const runCalc = () => {
  switch (operation) {
    case "+":
      runAdd();
      break;
    case "-":
      runSubstract();
      break;
    case "×":
      runMultiply();
      break;
    case "÷":
      runDivide();
      break;
    default:
      return;
  }
};
equalTo.addEventListener("click", runCalc);

const runAdd = () => {
  const NewSecondOperation = secondOperation;
  const addSecond = Number(NewSecondOperation.join(""));
  const addFirst = Number(firstOperation.join(""));
  addResult = addFirst + addSecond;
  resultDisplay.innerText = addResult.toLocaleString();
};
const runDivide = () => {
  const NewSecondOperation = secondOperation;
  const addSecond = Number(NewSecondOperation.join(""));
  const addFirst = Number(firstOperation.join(""));
  const addResult = addFirst / addSecond;
  resultDisplay.innerText = addResult.toLocaleString();
};
const runMultiply = () => {
  const NewSecondOperation = secondOperation;
  const addSecond = Number(NewSecondOperation.join(""));
  const addFirst = Number(firstOperation.join(""));
  const addResult = addFirst * addSecond;
  resultDisplay.innerText = addResult.toLocaleString();
};
const runSubstract = () => {
  const NewSecondOperation = secondOperation;
  const addSecond = Number(NewSecondOperation.join(""));
  const addFirst = Number(firstOperation.join(""));
  const addResult = addFirst - addSecond;
  resultDisplay.innerText = addResult.toLocaleString();
};

const runNewCalc = () => {};
