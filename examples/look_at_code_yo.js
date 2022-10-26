/*
Pre-Class Drill:

Without running the code, determine what the following code will output and why:
*/

var a = 1;
function outer(){
  var a;
  a = 2;
  function inner(){
    var a;
    a++;
    console.log(a);
    a = 5;
  }
  inner();
}
outer();
