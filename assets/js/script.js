let nowYear = 2023;
let childYear = 2008;
let limetYear = 1900;

// let checkYear = prompt("Введіть рік для перевірки ", "");

// switch (true) {
//   case checkYear > nowYear: {
//     alert("Такий рік буде пізніше");
//     break;
//   }
//   case checkYear < limetYear: {
//     alert("Стільки не живуть");
//     break;
//   }
//   case checkYear == nowYear: {
//     alert("Новонароджений");
//     break;
//   }
//   case checkYear >= childYear: {
//     alert("Період дитинства");
//     break;
//   }
//   default: {
//     alert("Успішна регістрація");
//     break;
//   }
// }

// checkYear = prompt("який зараз рік?", "");

// let year = checkYear == nowYear;
// let answer = year ? "Все вірно 2023p" : "Не вірно";
// alert(answer);

const form = document.querySelector(".form-color");
const colorInput = document.querySelector("#color");
const caseResult = document.querySelector("#caseResult");
const colorDescripton = document.querySelector(".color-descripton");

// part 1
// function getValue() {
//   const getColor = colorInput.Value;
//   colorDescripton.innerHTML = getColor;
// }
// colorInput.addEventListener("input", getValue)

// part 2
// function getValue() {
//   const getColor = colorInput.Value;
//   colorDescripton.innerHTML = getColor;
// }

// caseResult.addEventListener("click", function (event) {
//   event.preventDefault();
//   getValue();
// });

// part 3
function getValue() {
  let pushColor;
  const getColor = colorInput.value.toLowerCase();

  switch (getColor) {
    case "синій": {
      pushColor = "Синій колір моря, можливо спокійний чи бурхливий";
      colorDescripton.style.backgroundColor = "#AA0000";
      break;
    }
    case "червоний": {
      pushColor = "Колір уваги, зажди привертай увагу";
      break;
    }
    case "жовтий": {
      pushColor = "Теплий затишний колір - Жовтий";
      break;
    }
    case "білий": {
      pushColor = "Ще не визначено, що подобається";
      break;
    }
    default: {
      pushColor = "колір не визначено в переліку";
      break;
    }
  }

  colorDescripton.innerHTML = pushColor;
}

caseResult.addEventListener("click", function (event) {
  event.preventDefault();
  getValue();
});
