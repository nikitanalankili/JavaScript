//FOR loops 
/*sum = 0
for (var i=0;i<10;i++)
{
    sum = sum+i;
}
console.log("The sum in for loop is : ",sum)
console.log("\n")
//WHILE loops
sumw=0
var i =0
while(i<10)
{
    sumw+=i;
    i++;
}
console.log("The sum in while loop is : ",sumw)
console.log("\n")
//DO-WHILE loops
 i=0
sumd=0
do{
    sumd+=i
    i++
}while(i<10)
console.log("The sum in do-while loop is : ",sumd)
console.log("\n")
*/
//arrays
//arr = [10,20,30] valid
//arr = [10,20,20.5] valid
//arr = [10,"Nikita",20,"Student"] valid
//arr = [10,20.87,true,false ] valid
//arr = [10,"Nikita",20,"Student",true,'Electronics']
/*for(i=0;i<arr.length;i++)
{
    console.log("The elements in the array are : ",arr[i])
}
console.log("\n")*/
//FOR IN LOOP
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
for (const index in kongu)
{
    console.log("The element present in index",index,"is",kongu[index])
}
console.log("\n")

//FOR OF LOOP
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
for(element of kongu)
{
    console.log("The element is ",element)
}
console.log("\n")

//FOR EACH LOOP
var kongu = new Object
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
kongu.forEach(key,element => {
    console.log(key,element)
    
});
console.log("\n")
