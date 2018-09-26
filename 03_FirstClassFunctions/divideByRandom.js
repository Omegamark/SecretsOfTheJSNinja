function MakeFakeMonthlyActProgressNumbers() {
  let numberOfFakeActsForFrontPageProgressBar = 1000;
  // Get date
  let today = new Date(Date.now());
  // Get month *** add 1 for javascript inconsistency for months.
  let month = today.getMonth() + 1;
  // Get year
  let year = today.getFullYear();
  // Get number of days in the month
  let numberOfDaysInCurrentMonth = daysInMonth(month, year);
  // Get today's numerical date.
  let todaysNumericalDate = today.getDate();
  // Divide 1000 by number of days in the month, then get today's date and multiply by that number.
  let fakeProgress = Math.floor(
    numberOfFakeActsForFrontPageProgressBar /
      numberOfDaysInCurrentMonth *
      todaysNumericalDate
  );
  return fakeProgress;
}
// MakeFakeMonthlyActProgressNumbers();

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
// var shit = new Date(Date.now())
// console.log(shit.getDate())

let today = new Date(Date.now())
console.log(today.toLocaleString("en-us", { month: "long" }))
// var objDate = new Date("10/11/2009"),
//     locale = "en-us",
//     month = objDate.toLocaleString(locale, { month: "long" });

// console.log(month);

// // or if you want the shorter date: (also possible to use "narrow" for "O"
// console.log(objDate.toLocaleString(locale, { month: "short" }));