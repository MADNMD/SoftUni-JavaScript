function evenPositionElement(array) {

const result = array
.filter((parametar, index) => index % 2 === 0)
.join(' ');
console.log(result);
   
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['A', 'B']);
evenPositionElement(['5', '10']);
