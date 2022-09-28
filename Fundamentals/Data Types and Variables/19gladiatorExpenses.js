function gladiatorExpenses(lostFight, hemletPrice, swordPrice, shieldPrice, armorPrice) {
    let lostCount = 0;
    let expenses = 0;
    
    for (let i = 0; i < lostFight; i++) {
        lostCount++;
        if (lostCount % 2 === 0) {
            expenses += hemletPrice;
        }
        if (lostCount % 3 === 0) {
            expenses += swordPrice
        }
        if (lostCount % 6 === 0) {
            expenses += shieldPrice;
        }
        if (lostCount % 12 === 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);