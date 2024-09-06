function formSubmit(){
    var name = document.querySelector('#FirstName').value ;
    var lastName= document.querySelector('#LastName').value;
    var email = document.querySelector('#email').value;
    var password= document.querySelector('#password').value;
    console.log(`${name} is with email ${email} and has a password ${password}`)
    return false;
}