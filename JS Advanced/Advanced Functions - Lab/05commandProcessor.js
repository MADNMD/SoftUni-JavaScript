function solution() {

    let result = '';

    return {
        append(string) {
            result += string;
        },
        removeStart(number) {
            result = result.slice(number);
        },
        removeEnd(number) {
            result = result.slice(0, -number);
        },
        print() {
            console.log(result);
        }
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
