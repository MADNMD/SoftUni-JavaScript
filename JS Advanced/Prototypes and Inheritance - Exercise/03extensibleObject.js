function extensibleObject() {
    let proto = {};
    let istance = Object.create(proto);

    istance.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                istance[key] = value;
            }
        })
    }
    return istance;
}