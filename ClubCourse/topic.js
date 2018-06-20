var topic = [
    "獵殺星期一",
    "寶貝老闆",
    "教父",
    "命運好好玩",
    "神隱少女",
    "遊戲人生"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(4,1);