function filterEmployees(input, criteria) {

    const employees = JSON.parse(input)
    let [gender, value] = criteria.split('-');

    employees
        .filter(employee => employee[gender] === value)
        .map((employee, index) => `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        .forEach(employee => console.log(employee))
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');