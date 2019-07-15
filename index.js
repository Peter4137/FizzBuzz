function fb(x){
    let ans = [];
    if (x%3 == 0){
        ans.push("Fizz")
    }
    if (x%13 == 0){
        ans.push("Fezz")
    }
    if (x%5 == 0){
        ans.push("Buzz")
    }
    if (x%7 == 0){
        ans.push("Bang")
    }
    if (x%11 == 0){
        ans = ["Bong"];
        if (x%13 == 0){
            ans = ["FezzBong"];
        }
    }
    if (x%17 == 0){
        ans.reverse()
    }
    if (ans.length == 0){
        console.log(x)
    }else{
        console.log(ans.join(""))
    }
}
for (var i = 1; i < 256; i++){
    fb(i);
}