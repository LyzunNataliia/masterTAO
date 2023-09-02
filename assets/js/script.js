let nowYear = 2023;
let childYear = 2008;
let limetYear = 1900;

let checkYear = prompt("Введіть рік для перевірки ", "");

if (checkYear > nowYear) {
  alert("Такий рік буде пізніше");
} else if (checkYear < limetYear) {
  alert("Стільки не живуть");
} else if (checkYear == nowYear) {
  alert("Новонароджений");
} else if (checkYear >= childYear) {
  alert("Період дитинства");
} else {
  alert("Eспішна регістрація");
}

checkYear = prompt("який зараз рік?", "");

if (checkYear < nowYear) {
  alert("ні, трішки більше");
} else if (checkYear > nowYear) {
  alert("ні, трішки менше");
} else {
  alert("Все вірно, зараз = " + checkYear + " рік.");
}
