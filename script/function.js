// var myName= prompt('please enter your name')
// alert(' hello, '+myName)
//syntax
//declarative
// function name(){
//     output
// }
//calling/invoking
// function add(){
//     console.log(5+2)
// }
// add()
// add()
// add()
//function without parameter
// function friends(){
//     var name= prompt('please enter your name')
//     var age= prompt('please enter your age')
//     console.log(`${name} is ${age} year's old`)
// }
// friends()
//function with parameter/argument
// function students(name,age,course){
// console.log(`${name} is ${age} years studying ${course}`)
// }
// students('john', '23', 'php')
// students('james','20', 'css')
// students()
// //function with parameter with a default value
// function students2(name='johnny',age=19,course='js'){
// console.log(`${name} is ${age} studying ${course}`)        
// }
// students2()
// students2('sarah', 13, 'php')
// students2(32,'javsa', 'king')
//function break and continue
// for(let i=0; i<30; i++){
//     console.log(i)
// }
// for(let i=0; i<30; i++){
//     if(i==20)
//         break;
//         {
//         console.log(i)
//     }
// };
// var friends= ['john', 'dino', 'nancy', 'victory', 'prince', 'fidel', 'kate']
// for(i=0; i<friends.length; i++){
//     console.log(friends[i],'we are friends')
// }
//break stops at a particular part
// for(i=0;i<friends.length;i++){
//     if(friends[i]==='prince'){
//         break;
//     }
//     console.log(friends[i],'were cool')
// }
// //continue stops at a particular point
// console.log("Next")
// for(i=0;i<friends.length;i++){
//     if(friends[i]==='victory'){
//       continue;
//     }
//     console.log(friends[i],'were cool')
// }
// console.log("Next")
// for(let i=0; i<=50;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i,'you are the love of the three')
// }
// var cost= Number(prompt('please input the cost of the item'))
// var sold= Number(prompt('please input the amount you sold it for'))
// if(cost<sold){
//     console.log('you made a profit')
// }
// else if(sold<cost){
//     console.log('you had a loss')
// }
// function profitLoss(){
//     console.log(sold-cost)
// }
//  profitLoss()
//  console.log('Next')
//  purchasingrice,sellingPrice;
//  function profitLoss(purchasingrice,sellingPrice){
//      purchasingrice =Number(prompt('how much did you buy it'))
//      sellingPrice= Number(prompt('how much did you sell it for'))
//      if(sellingPrice>purchasingrice)
//          console.log(`we made profit  ${Math.abs(purchasingrice-sellingPrice)}`)
//      else
//      console.log(`you made a loss of ${Math.abs(purchasingrice-sellingPrice)}`)
//  }
//  profitLoss(sellingPrice,purchasingprice)
function ageCaculator(){
    var yearOfBirth= Number(prompt('please put your year of birth'))
     var Daytime= new Date()
     currentYear = Daytime.getFullYear
    // currentYear = 2024
    console.log(currentYear-yearOfBirth)
}
ageCaculator()
console.log('next')
var pie,radius;
function circumference(){
    var pie=22/7
    var radius= Number(prompt('please put the radius of the circle'))
    console.log(2*pie*radius+'cm' , 'is the circumference of the circle')
}
circumference()
var principle,rate,time;
function simpleInterest(){
    var principle= Number(prompt('please put the principle price'))
    var rate= Number(prompt('please put the interest rate of the items'))
    var time= Number(prompt('please put the time the interest is expected to grow'))
    console.log(principle*rate*time/100+ 'is the simple interest of the item')
}
simpleInterest()