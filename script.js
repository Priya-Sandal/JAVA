const today = new Date();
const day = today.getDay();

const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
// document.getElementById("demo").innerHTML= ("Today is :" + dayList[day] + "");
document.getElementById("demo").innerHTML = ("Today is :" + dayList[day] + "");

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let hourslist = [];
for (let i = 0; i <= 23; i++) {
    hourslist.push(i);
}

let minuteList = [];
for (i = 0; i <= 59; i++) {
    minuteList.push(i);
}
let secondList = [];
for (i = 0; i <= 59; i++) {
    secondList.push(i);
}
let prepand = (i >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;
document.getElementById("demo1").innerHTML = ("Current time is:" + hourslist[hour] + "" + prepand + ":" + minuteList[minutes] + ":" + secondList[seconds] + "");




