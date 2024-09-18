const dagenvandeweek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const today = new Date().getDay()
const huidigeDag = dagenvandeweek[today]

const isWeekday = today >= 1 && today <= 5;

if(isWeekday) {
    console.log("Ik moet naar school");
} else {
    console.log("Lekker uitslapen!");
}