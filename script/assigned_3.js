function formSubmit(){
    var radius= document.getElementById('special').value;
    radius= parseFloat(radius);
    var number=2
    var pie=22/7
    var circumference= radius*number*pie
    document.getElementById('result').value= circumference;
    return false;
}
function submitForm(){
    var principle= document.getElementById('principle').value;
    principle= parseFloat(principle);
    var rate= document.getElementById('rate').value;
    rate= parseFloat(rate);
    var year= document.getElementById('year').value;
    year=parseFloat(year)
    var simpleInterest= principle*rate*year
    document.getElementById('simpleInterest').value= simpleInterest;
    return false;
}