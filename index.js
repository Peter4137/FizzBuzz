function fb(x){
    let ans = [];
    if (x%3 == 0){
        ans.push("Fizz")
    }
    if (x%5 == 0){
        ans.push("Buzz")
    }
    if (ans.length == 0){
        console.log(x)
    }else{
        console.log(ans.join(""))
    }
}
for (var i = 1; i < 100; i++){
    fb(i);
}