let readline = require('readline-sync');

function fb(x, rules){
    let ans = getArray(x, rules);
    if (ans.length == 0){
        console.log(x)
    }else{
        console.log(ans.join(""))
    }
}

function getArray(x, rules){
    let ans = [];
    if (x%3 == 0 && rules[3] == "Y"){
        ans.push("Fizz")
    }
    if (x%13 == 0 && rules[13] == "Y"){
        ans.push("Fezz")
    }
    if (x%5 == 0 && rules[5] == "Y"){
        ans.push("Buzz")
    }
    if (x%7 == 0 && rules[7] == "Y"){
        ans.push("Bang")
    }
    if (x%11 == 0 && rules[11] == "Y"){
        ans = ["Bong"];
        if (x%13 == 0 && rules[13] == "Y"){
            ans = ["FezzBong"];
        }
    }
    if (x%17 == 0 && rules[17] == "Y"){
        ans.reverse()
    }
    return ans
}

function getRule(item, rules){
    console.log("Do you want to include the rule for "+item+"? (Y/N)")
    let input = readline.prompt();
    if (input == "Y"){
        rules[item] = "Y";
    }
    else if (input == "N"){
        rules[item] = "N";
    }else{
        console.log("invalid answer, assuming Y")
    }
    return rules
}

let rules = {
    3: "Y",
    5: "Y",
    7: "Y",
    11: "Y",
    13: "Y",
    17: "Y"};
    
let maxnum = "a";
while (isNaN(maxnum)){
    console.log("Maximum number? ")
    maxnum = readline.prompt();
    if (isNaN(maxnum)){
        console.log("Invalid integer, please try again")
    }
}

console.log("Do you want to turn on/off rules? (Y/N)")
let ruleChange = readline.prompt();
if (ruleChange == "Y"){
    for (item in rules){
        rules = getRule(item, rules)
    }
}

for (let i = 1; i < +maxnum + 1; i++){
    fb(i, rules);
}