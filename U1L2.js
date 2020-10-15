

var hello = "hello";
for(var i = 3; i < 8; i++){
    if(i%2!=0){console.log(i);}
}
console.log("hello");
var fCount = 5;
var open = true;
function sellfries(){
    if(fCount!=0){
        fCount--;
        console.log("There are " + fCount + " fries left");
    }else{
        console.log("Out of fries :(");
        open = false;
    }
}
while(open){
    sellfries();
}

// how do you create objects
// how do you create an array of objects
// how do you extranct and traverse an array of object
