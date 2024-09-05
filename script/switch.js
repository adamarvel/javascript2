var  myName= prompt('please enter your name')
alert(' hello,'+myName)
if(myName=='john'){
    console.log('you are a lucky guy')
}
else if(myName=='james'){
    console.log('you are not what we are looking for')
}
else if(myName=='phone'){
    console.log('please give me back my phone')
}
else if(myName=='joshua'){
    console.log('why did you not come')
}
else{
    console.log('who are you')
}
//syntax
//variable
/*
switch(condition){
    case 1:
        output;
        break;
    case 2:
        output;
        break;
    case 3:
        output;
        break;
    default;
        output;
        break;

}
*/
switch(myName){
    case 'john':
        console.log('Message')
        break;
    case 'joshua':
        console.log('where are you')
        break;
    case 'phone':
        console.log('please come back')
        break;
        default:
            console.log('welcome any way')
            break;
}