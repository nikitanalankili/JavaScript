//set -> collection of unique value 
//syntax -> varaible name  = new set()
// add elements -> variable name.add(value)
// print -> console.log(variable) 
// MAP : key value pair 
//variable name = new map()
//variable name add.("12","21ecr132")

//SET:
setExample = new Set(["aiadmk","bjk","congress"])
setExample.add("dmk")
setExample.add("mkl")
console.log(setExample)
for(element of setExample)
{
    console.log("The element is ",element)
}
console.log("\n")

//MAP
mapExample = new Map([["ID","21ECR132"],["Name","Nikita"]])
console.log(mapExample)
for(element of mapExample)
{
    console.log("The element is ",element)
}
console.log("\n")
console.log(mapExample.has("Name"))
