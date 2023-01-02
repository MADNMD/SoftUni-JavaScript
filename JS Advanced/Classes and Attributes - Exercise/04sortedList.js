class List {
    constructor() {
        this.listed = [];
        this.size = this.listed.length;
    }

    add(element) {
        this.listed.push(element);
        this.size = this.listed.length;
        this.listed.sort((a, b) => a - b);
    }

    remove(index) {

        if (typeof this.listed[index] === 'undefined') {
            throw new Error('Invalid Index!');

        }
        this.listed.splice(index, 1);
        this.size = this.listed.length;

    }

    get(index) {
        if (typeof this.listed[index] === 'undefined') {
            throw new Error('Invalid Index!');

        }
        return this.listed[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
