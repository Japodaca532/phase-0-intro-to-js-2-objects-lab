const employee = {
    name: 'Jac', 
    streetAddress: '819 Amor St',
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]: value,
    };
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    let newEmployee = 'jamie'
}