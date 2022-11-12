const userOne = {
    role: 'admin',
    firstname: 'Дмитрий'
}

const userTwo = {
    role: 'manager',
    firstname: 'Алексей'
}

function getDefaultRole(){
    return 'admin'
}

function checkAccess (user, role = getDefaultRole()){
    return user.role === role;
} 


function checkAccessAndShowMessage(user, role){
    if (checkAccess(user, role)){
        showSuccessMessage(user);
    } else {
        showErrorMessage(user);
    }
}

checkAccessAndShowMessage(userOne, 'admin')
checkAccessAndShowMessage(userTwo, 'manager')

function showSuccessMessage(user){
    console.log('!!!!!!!!!!!!!!!!');
    console.log(`! Доступ открыт ${user.firstname} !`);
    console.log('!!!!!!!!!!!!!!!!');
}
function showErrorMessage(user){
    console.log('!!!!!!!!!!!!!!!!');
    console.log(`! Доступ закрыт ${user.firstname} !`);
    console.log('!!!!!!!!!!!!!!!!');
}




const sayHi = function(){
    console.log('Привет');
}
function sayHi1() {
    console.log('Привет');
}
const sayHi2 = () => console.log('Привет');
sayHi();
sayHi1();
sayHi2();

const repeatString = (text, repeatCount) => {
    for (let i = 0; i < repeatCount; i++) {
        console.log(text)
    }
}












