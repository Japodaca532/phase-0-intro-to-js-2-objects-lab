 const employee = {
    name: 'Jac'
    }

function updateEmployeeWithKeyAndValue(employee, name, value){
    return{...employee,
    [name]: value,
  } 
}    
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
  }
function deleteFromEmployeeByKey(employee, name, value){
    const newEmployee = {employee};
    newEmployee[name] = value;
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee){
    delete employee.name;
    return employee;
}