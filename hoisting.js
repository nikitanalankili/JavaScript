// Variable Hoisting
/*console.log(a)
var a = 10*/ //Undefined error

/*console.log(a)
let a = 10*///ReferenceError: Cannot access 'a' before initialization

//FUNCTIONAL HOISTING 
kec(5,10)
function kec(a,b)
{
    //console.log("Function with argument and without return type")
    for (var i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log("The number is even and the number is : ",i)
        }
        else{
            console.log("The number is odd and the number is : ",i)
        }
    }
}