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
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    return{
        name: 'Jac',
 streetAddres: '820 Amor St',
};
}