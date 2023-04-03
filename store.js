let isWeekend = false;
let isHoliday = false;
let currentTime = 22;

if (isWeekend == true || isHoliday == true) {
    let status = "The store is closed.";
    console.log(status);
    return (status);
} else if (currentTime > 8 && currentTime < 18) {
    let status = "The store is open.";
    console.log(status);
    return (status);
} else {
    let status = "The store is closed.";
    console.log(status);
    return (status);
}
