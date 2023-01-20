function calorieObject(arrStore) {

    const store = {};

    for (let i = 0; i < arrStore.length; i += 2) {
        const product = arrStore[i];
        store[product] = Number(arrStore[i + 1]);
    }
    console.log(store);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);