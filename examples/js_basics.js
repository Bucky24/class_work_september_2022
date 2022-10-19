/*

Variables
Conditionals
Loops
Functions
Object/Arrays

*/

var name = "Bob";

console.log(name);

if ("60" === 60 && (name === "Bob" || name.length > 1) && "a" != "b") {
    console.log("its true");
}

for (var i=0;i<5;i++) {
    console.log("loop");
}

while (false) {
    console.log("while loop");
}

//console.log(i);

function func(text, callBackFunction) {
    //console.log("function is called with " + text);

    callBackFunction(text);
}

func("woo", console.log);
/*func(parseInt("54"));
func();
func();
func();*/
