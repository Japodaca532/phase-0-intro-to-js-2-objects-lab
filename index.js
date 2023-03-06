 const employee = {
    name: 'Jac', 
    streetAddress: '819 Amor St',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee['name'] = value;
    return newEmployee; 
    
}    
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[name] = value;
    return employee;
  }
function deleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee){
    delete employee.name;
    return employee;
}