#!/usr/bin/env node
import inquirer  from "inquirer";
const number = await inquirer.prompt([{
    name : "first",
    type : "number",
    message: "Enter your first number"
},
{
    name : "second",
    type : "number",
    message: "Enter your second number"
},
{
    name : "operators",
    message: " please choose the operator",
    type : "list",
    choices : ["+", "-","*" ,"/" ,"%", "**"]
},
])
if (number.operators == "+"){
    console.log(number.first +  number.second)
}
else if(number.operators == "-"){
    console.log(number.first - number.second)
}
else if(number.operators == "*"){
    console.log(number.first * number.second)
}
else if(number.operators == "/"){
    console.log(number.first / number.second)
}
else if(number.operators == "%"){
    console.log(number.first  % number.second)
}
else if(number.operators == "**"){
    console.log(number.first ** number.second)
}