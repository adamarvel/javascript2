// var myName= prompt('please enter your name')
// alert(' hello, '+myName)
//syntax
//declarative
// function name(){
//     output
// }
//calling/invoking
function add(){
    console.log(5+2)
}
add()
add()
add()
//function without parameter
// function friends(){
//     var name= prompt('please enter your name')
//     var age= prompt('please enter your age')
//     console.log(`${name} is ${age} year's old`)
// }
// friends()
//function with parameter/argument
function students(name,age,course){
console.log(`${name} is ${age} years studying ${course}`)
}
students('john', '23', 'php')
students('james','20', 'css')
students()
//function with parameter with a default value
function students2(name='johnny',age=19,course='js'){
console.log(`${name} is ${age} studying ${course}`)        
}
students2()
students2('sarah', 13, 'php')
students2(32,'javsa', 'king')
//function break and continue
// for(let i=0; i<30; i++){
//     console.log(i)
// }
for(let i=0; i<30; i++){
    if(i==20)
        break;
        {
        console.log(i)

    }
}
var friends= ['john', 'dino', 'nancy', 'victory', 'prince', 'fidel', 'kate']
// for(i=0; i<friends.length; i++){
//     console.log(friends[i],'we are friends')
// }
for(i=0;i<friends.length;i++){
    if(friends[i]==='kate'){
        break;
    }
    console.log(friends[i],'were cool')
}
console.log("Next")
for(i=0;i<friends.length;i++){
    if(friends[i]==='victory'){
      continue;
    }
    console.log(friends[i],'were cool')
}
console.log("Next")
for(let i=0; i<=50;i++){
    if(i%2==0){
        continue;
    }
    console.log(i)
}