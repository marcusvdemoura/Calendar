"use strict";

const date = new Date();

function render(){
date.setDate(1);

const monthDays = document.querySelector(".days");

const lastDay = new Date(
date.getFullYear(),
date.getMonth() + 1,
0
).getDate();

const prevLastDay = new Date(
date.getFullYear(),
date.getMonth(),
0
).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(
date.getFullYear(),
date.getMonth() + 1,
0
).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",
];

// sets the month
document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//gets the date in a readable format
document.querySelector(".date p").innerHTML = new Date().toDateString();

// iterate through the days of the month to get the right position in the week

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
days += `<div>${i}</div>`;

monthDays.innerHTML = days;
}

for (let j = 1; j <= nextDays; j++) {
days += `<div class="next-date">${j}</div>`;
monthDays.innerHTML = days;
}
};

document.querySelector(".prev").addEventListener("click", function () {
date.setMonth(date.getMonth() - 1);
render();
});

document.querySelector(".next").addEventListener("click", function () {
date.setMonth(date.getMonth() + 1);
render();
});

render();

