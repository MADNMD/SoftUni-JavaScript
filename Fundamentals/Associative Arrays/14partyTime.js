function partyTime(list) {

    let listOfGuest = {
        vip: [],
        regular: []
    }
    let guest = list.shift();
    while (guest !== 'PARTY') {
        let firstChar = guest[0];
        if (!isNaN(firstChar)) {
            listOfGuest.vip.push(guest);
        } else {
            listOfGuest.regular.push(guest);
        }
        guest = list.shift();
    }
    for (let guest of list) {
        if (listOfGuest.vip.includes(guest)) {
            let index = listOfGuest.vip.indexOf(guest);
            listOfGuest.vip.splice(index, 1);
        } else if (listOfGuest.regular.includes(guest)) {
            let index = listOfGuest.regular.indexOf(guest);
            listOfGuest.regular.splice(index, 1);
        }
    }

    let vipGuest = listOfGuest.vip.length;
    let regularGuest = listOfGuest.regular.length;
    let allGuest = vipGuest + regularGuest;
    console.log(allGuest);
    console.log(listOfGuest.vip.join('\n'));
    console.log(listOfGuest.regular.join(' \n'));
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ']);