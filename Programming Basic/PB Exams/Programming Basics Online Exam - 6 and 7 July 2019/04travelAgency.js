function travelAgency([type1, type2, type3, arg1]) {
    let town = type1;
    let package = type2;
    let discount = type3;
    let days = Number(arg1);
    let cost = 0;
    let price = 0

    if ((town === "Bansko" || town === "Borovets") && (package === "withEquipment" || package === "noEquipment")) {
        if (package === "withEquipment") {
            switch (discount) {
                case "yes": price = 100 * 0.9; break;
                case "no": price = 100; break
            }
        } else if (package === "noEquipment") {
            switch (discount) {
                case "yes": price = 80 * 0.95; break;
                case "no": price = 80; break
            }
        }
    } else if ((town === "Varna" || town === "Burgas") && (package === "withBreakfast" || package === "noBreakfast")) {
        if (package === "withBreakfast") {
            switch (discount) {
                case "yes": price = 130 * 0.88; break;
                case "no": price = 130; break;
            }
        } else if (package === "noBreakfast") {
            switch (discount) {
                case "yes": price = 100 * 0.93; break;
                case "no": price = 100; break;
            }
        }
    } else {
        console.log(`Invalid input!`);
        return;
    }

    if (days >= 1 && days <= 7) {
        cost = price * days;
    } else if (days > 7) {
        cost = price * (days - 1);
    } else if (days < 1) {
        console.log(`Days must be positive number!`);
        return;
    }
    console.log(`The price is ${cost.toFixed(2)}lv! Have a nice time!`);
}
travelAgency([
    "Borovets",
    "noEquipment",
    "yes",
    "6"]);