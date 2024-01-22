//Scope 
//accessibility of a variable 
//types of scope -> local , global , block


// GLOBAL SCOPE
/*var sum = 0
for (var i = 0;i < 10; i++)
{
    sum += i
}
console.log(sum)
console.log("\n")
i = 0
sum = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)
console.log("\n")
i=0
sum=0
// do while
do{
    sum += i
    i++
}while(i<10)
console.log(sum)
console.log("\n")*/


//LOCAL SCOPE
/*for (let i=0;i<5;i++)
{
    console.log(i)
}
console.log(i)*/

//BLOCK SCOPE 
// When a variable is defined using 'let' it forgets the value oce it exits the block i.e the value is constrained only inside the particular block
var a =10
console.log(a)
{
    let a =5
    let b=5
    /*if instead of let if u only put a = 5 then the value of a changes to 5*/
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)