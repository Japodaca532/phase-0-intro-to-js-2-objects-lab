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
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
const employee = 'Sam'
}