function tradeCommissions(input) {
    let city = input[0];;
    let sale = Number(input[1]);
    let bonus = 0;

    if (city === "Sofia") {
        if (sale >= 0 && sale <= 500) {
            bonus = sale * 0.05;
            console.log(bonus.toFixed(2));
        } else if (sale > 500 && sale <= 1000) {
            bonus = sale * 0.07;
            console.log(bonus.toFixed(2));
        } else if (sale > 1000 && sale <= 10000) {
            bonus = sale * 0.08;
            console.log(bonus.toFixed(2));
        } else if (sale > 10000) {
            bonus = sale * 0.12;
            console.log(bonus.toFixed(2));
        } else if (sale < 0) {
            console.log("error")
        }
    } else if (city === "Varna") {
        if (sale >= 0 && sale <= 500) {
            bonus = sale * 0.045;
            console.log(bonus.toFixed(2));
        } else if (sale > 500 && sale <= 1000) {
            bonus = sale * 0.075;
            console.log(bonus.toFixed(2));
        } else if (sale > 1000 && sale <= 10000) {
            bonus = sale * 0.10;
            console.log(bonus.toFixed(2));
        } else if (sale > 10000) {
            bonus = sale * 0.13;
            console.log(bonus.toFixed(2));
        } else if (sale < 0) {
            console.log("error")
        }
    } else if (city === "Plovdiv") {
        if (sale >= 0 && sale <= 500) {
            bonus = sale * 0.055;
            console.log(bonus.toFixed(2));
        } else if (sale > 500 && sale <= 1000) {
            bonus = sale * 0.08;
            console.log(bonus.toFixed(2));
        } else if (sale > 1000 && sale <= 10000) {
            bonus = sale * 0.12;
            console.log(bonus.toFixed(2));
        } else if (sale > 10000) {
            bonus = sale * 0.145;
            console.log(bonus.toFixed(2));
        } else if (sale < 0) {
            console.log("error")
        }
    } else {
        console.log("error")
    }
}
tradeCommissions(["Sofia", "1500"]);