function matchDates(dates) {

    const pattern = /\b(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let date = dates.shift();
    let matches = date.matchAll(pattern);

    for (let match of matches) {
        const day = match.groups.day;
        const month = match.groups.month;
        const year = match.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);